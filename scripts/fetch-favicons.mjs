// Downloads one favicon per host in content/consumed.ts, writes it as a PNG
// under public/favicons/, and regenerates the manifest the page imports.
// Run with: node scripts/fetch-favicons.mjs
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "favicons");
const MANIFEST = path.join(ROOT, "content", "favicons.ts");
// Cap rather than target: upscaling a 32px favicon to a fixed size just blurs
// it, so store whatever native detail exists up to this bound.
const MAX = 96;
// A blurry 16px mark still says more than no mark, so accept anything real.
const MIN_NATIVE = 16;

// Hosts whose icon can't be discovered: the homepage blocks us (Cloudflare
// fingerprints the TLS handshake, which headers can't fake) or the site
// declares nothing. The assets themselves serve fine when asked directly.
const OVERRIDES = {
  "marginalrevolution.com":
    "https://marginalrevolution.com/wp-content/uploads/2015/10/cropped-MR-logo-thumbnail-192x192.png",
  "x.com": "https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png",
};

// Cloudflare and friends 403 a bare fetch; they want a browser-shaped header set.
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Upgrade-Insecure-Requests": "1",
};

function hostsFromContent() {
  const src = fs.readFileSync(path.join(ROOT, "content", "consumed.ts"), "utf8");
  const hosts = new Set();
  for (const m of src.matchAll(/url:\s*"(https?:\/\/[^"]+)"/g)) {
    try {
      hosts.add(new URL(m[1]).hostname.replace(/^www\./, ""));
    } catch {}
  }
  return [...hosts].sort();
}

async function get(url, timeout = 20000) {
  const res = await fetch(url, {
    headers: HEADERS,
    signal: AbortSignal.timeout(timeout),
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return {
    buf: Buffer.from(await res.arrayBuffer()),
    type: res.headers.get("content-type") ?? "",
  };
}

// Rank declared icons. apple-touch-icon is reliably full-colour and large;
// mask-icon is a monochrome Safari silhouette and must never be used.
function rank(rel, href, size) {
  if (rel.includes("mask-icon")) return -1;
  if (rel.includes("apple-touch-icon")) return 5000 + size;
  if (href.toLowerCase().endsWith(".svg")) return 3000;
  return size || 100;
}

function candidates(html, base) {
  const out = [];
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    const rel = tag.match(/rel=["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? "";
    if (!rel.includes("icon")) continue;
    const href = tag.match(/href=["']([^"']+)["']/i)?.[1];
    if (!href) continue;
    const size = Number(tag.match(/sizes=["'](\d+)x\d+["']/i)?.[1] ?? 0);
    const score = rank(rel, href, size);
    if (score < 0) continue;
    try {
      out.push({ score, url: new URL(href.replace(/&amp;/g, "&"), base).href });
    } catch {}
  }
  return out.sort((a, b) => b.score - a.score).map((c) => c.url);
}

const PNG_MAGIC = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

// libvips has no ICO decoder. An .ico entry holds either a whole PNG or a
// headerless BMP/DIB, so unpack it ourselves and hand sharp something it knows.
function decodeIco(buf) {
  if (buf.length < 6 || buf.readUInt16LE(0) !== 0 || buf.readUInt16LE(2) !== 1) return null;
  const count = buf.readUInt16LE(4);
  let best = null;
  for (let i = 0; i < count; i++) {
    const e = 6 + i * 16;
    if (e + 16 > buf.length) break;
    const area = (buf[e] || 256) * (buf[e + 1] || 256);
    const size = buf.readUInt32LE(e + 8);
    const off = buf.readUInt32LE(e + 12);
    if (off + size > buf.length) continue;
    if (!best || area > best.area) best = { area, off, size };
  }
  if (!best) return null;

  const data = buf.subarray(best.off, best.off + best.size);
  if (data.subarray(0, 8).equals(PNG_MAGIC)) return sharp(data);

  // BITMAPINFOHEADER: height counts the XOR bitmap plus the AND mask.
  if (data.length < 40) return null;
  const width = data.readInt32LE(4);
  const height = data.readInt32LE(8) / 2;
  const bpp = data.readUInt16LE(14);
  if (width <= 0 || height <= 0 || (bpp !== 32 && bpp !== 24)) return null;

  const stride = ((width * bpp / 8 + 3) & ~3) >>> 0;
  const px = data.subarray(40);
  if (px.length < stride * height) return null;

  const rgba = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    const row = (height - 1 - y) * stride; // DIB rows run bottom-up
    for (let x = 0; x < width; x++) {
      const s = row + x * (bpp / 8);
      const d = (y * width + x) * 4;
      rgba[d] = px[s + 2];
      rgba[d + 1] = px[s + 1];
      rgba[d + 2] = px[s];
      rgba[d + 3] = bpp === 32 ? px[s + 3] : 255;
    }
  }
  return sharp(rgba, { raw: { width, height, channels: 4 } });
}

async function toPng(buf, type, url) {
  const isIco = type.includes("icon") || url.toLowerCase().endsWith(".ico");
  const isSvg = type.includes("svg") || url.toLowerCase().endsWith(".svg");

  // SVGs that fill from CSS variables render blank off their own site.
  if (isSvg && buf.toString("utf8").includes("var(--")) {
    throw new Error("svg depends on external CSS vars");
  }

  const img = isIco ? decodeIco(buf) : sharp(buf);
  if (!img) throw new Error("unreadable ico");

  // SVGs have no natural pixel size, so render them straight at the cap.
  const meta = isSvg ? { width: MAX, height: MAX } : await img.metadata();
  const native = Math.min(meta.width ?? MAX, meta.height ?? MAX);
  const target = Math.min(native, MAX);

  const png = await img
    .resize(target, target, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      withoutEnlargement: !isSvg,
      kernel: "lanczos3",
    })
    .png({ compressionLevel: 9 })
    .toBuffer();

  return { png, native };
}

const hosts = hostsFromContent();
fs.mkdirSync(OUT_DIR, { recursive: true });

const ok = [];
const failed = [];

for (const host of hosts) {
  let urls = OVERRIDES[host] ? [OVERRIDES[host]] : [];
  for (const base of [`https://${host}/`, `https://www.${host}/`]) {
    if (urls.length) break;
    try {
      const { buf } = await get(base);
      urls = candidates(buf.toString("utf8"), base);
      if (urls.length) break;
    } catch {
      // Site may block the homepage but still serve /favicon.ico.
    }
  }
  // Many sites serve a 180px apple-touch-icon without declaring it.
  for (const h of [host, `www.${host}`]) {
    urls.push(
      `https://${h}/apple-touch-icon.png`,
      `https://${h}/apple-touch-icon-precomposed.png`,
      `https://${h}/favicon.ico`,
    );
  }
  // Last resort: Google's cache still holds icons for sites whose own copy has
  // rotted. Fetched at build time only — the file lands in the repo, so no
  // visitor ever talks to Google.
  urls.push(`https://www.google.com/s2/favicons?domain=${host}&sz=128`);

  // Take the sharpest candidate rather than the first that works — sites often
  // list a tiny legacy icon alongside a much better one.
  let best = null;
  for (const u of [...new Set(urls)]) {
    if (best && best.native >= MAX) break;
    try {
      const { buf, type } = await get(u);
      if (buf.length < 60) continue;
      const { png, native } = await toPng(buf, type, u);
      if (native < MIN_NATIVE) continue;
      if (!best || native > best.native) best = { png, native, url: u };
    } catch {}
  }

  if (best) {
    fs.writeFileSync(path.join(OUT_DIR, `${host}.png`), best.png);
    const flag = best.native < 48 ? " LOW" : "    ";
    console.log(
      `OK${flag} ${host.padEnd(34)} ${String(best.native).padStart(4)}px ${String(best.png.length).padStart(6)}B  ${best.url.slice(0, 50)}`,
    );
    ok.push(host);
  } else {
    console.log(`FAIL ${host}`);
    failed.push(host);
  }
}

fs.writeFileSync(
  MANIFEST,
  `// Generated by scripts/fetch-favicons.mjs — do not edit by hand.\n` +
    `export const FAVICON_HOSTS = new Set<string>(${JSON.stringify(ok, null, 2)});\n`,
);

console.log(`\n${ok.length}/${hosts.length} icons written to public/favicons/`);
if (failed.length) console.log(`no icon: ${failed.join(", ")}`);
