"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { sections } from "@/content/sections";
import { contacts } from "@/content/contacts";

export const OPEN_TERMINAL = "terminal:open";

const HOME = "~";

// /consumed-content lives under education here because the site only links it from there.
const ROUTES: Record<string, string> = {
  [HOME]: "/",
  ...Object.fromEntries(sections.map((s) => [`${HOME}/${s.slug}`, `/${s.slug}`])),
  [`${HOME}/education/consumed-content`]: "/consumed-content",
};

const FILES: Record<string, Record<string, string>> = {
  [HOME]: {
    "README.md":
      "Ivan Shishkin. CS student at UC Irvine. Cares most about reducing risks from AI systems; helps run the AI Safety Collective at UCI.",
  },
};

const LINKS = Object.fromEntries(
  contacts.filter((c) => c.href).map((c) => [c.label!.toLowerCase(), c.href!]),
);
const EMAIL = contacts.find((c) => c.copy)?.copy ?? "";

const COMMANDS: [string, string][] = [
  ["help", "list commands"],
  ["ls [dir]", "list pages"],
  ["cd <dir>", "go to a page (cd .. / cd ~)"],
  ["pwd", "print current page"],
  ["cat <file>", "print a file"],
  ["whoami", "who runs this place"],
  ["open <name>", `open ${Object.keys(LINKS).join(", ")}`],
  ["email", "copy my email address"],
  ["clear", "clear the screen (ctrl+l)"],
  ["exit", "close the terminal (esc)"],
];

type Line =
  | { kind: "cmd"; cwd: string; text: string }
  | { kind: "out"; body: ReactNode; tone?: "err" | "muted" };

function cwdFor(pathname: string): string {
  const hit = Object.entries(ROUTES).find(([, route]) => route === pathname);
  return hit ? hit[0] : HOME;
}

function childrenOf(dir: string): string[] {
  const prefix = dir + "/";
  return Object.keys(ROUTES)
    .filter((p) => p.startsWith(prefix) && !p.slice(prefix.length).includes("/"))
    .map((p) => p.slice(prefix.length));
}

function resolve(cwd: string, arg: string): string | null {
  let parts = cwd.split("/");
  let rest = arg.replace(/\/+$/, "");
  if (rest === "" || rest === HOME || rest === "/") return HOME;
  if (rest.startsWith(HOME + "/") || rest.startsWith("/")) {
    parts = [HOME];
    rest = rest.replace(/^~?\//, "");
  }
  for (const seg of rest.split("/")) {
    if (seg === "" || seg === ".") continue;
    if (seg === "..") {
      if (parts.length > 1) parts.pop();
      continue;
    }
    const next = [...parts, seg].join("/");
    if (!(next in ROUTES)) return null;
    parts.push(seg);
  }
  return parts.join("/");
}

function Prompt({ cwd }: { cwd: string }) {
  return (
    <span className="term-prompt">
      <span className="term-user">ivan@uci</span>:<span className="term-path">{cwd}</span>$
    </span>
  );
}

const WELCOME: Line[] = [
  { kind: "out", body: "Type `help` to see what this terminal can do.", tone: "muted" },
];

export default function Terminal() {
  const router = useRouter();
  const pathname = usePathname();
  const cwd = cwdFor(pathname);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);

  const open = () => {
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
    inputRef.current?.focus();
  };
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
        return;
      }
      const t = e.target as HTMLElement;
      const typing = t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName);
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_TERMINAL, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_TERMINAL, open);
    };
  }, []);

  useEffect(() => {
    screenRef.current?.scrollTo({ top: screenRef.current.scrollHeight });
  }, [lines]);

  const go = (path: string) => {
    router.push(ROUTES[path]);
    close();
  };

  function run(raw: string): Line[] {
    const [cmd = "", ...args] = raw.trim().split(/\s+/);
    const arg = args.join(" ");
    const out = (body: ReactNode, tone?: "err" | "muted"): Line[] => [{ kind: "out", body, tone }];

    switch (cmd) {
      case "":
        return [];
      case "help":
        return out(
          <span className="term-help">
            {COMMANDS.map(([name, desc]) => (
              <span key={name}>
                <span className="term-cmd">{name.padEnd(13)}</span>
                <span className="term-muted">{desc}</span>
              </span>
            ))}
          </span>,
        );
      case "ls": {
        const dir = arg ? resolve(cwd, arg) : cwd;
        if (!dir) return out(`ls: ${arg}: No such directory`, "err");
        const dirs = childrenOf(dir);
        const files = Object.keys(FILES[dir] ?? {});
        if (!dirs.length && !files.length) return out("(empty)", "muted");
        return out(
          <span className="term-ls">
            {dirs.map((d) => <span key={d} className="term-dir">{d}/</span>)}
            {files.map((f) => <span key={f}>{f}</span>)}
          </span>,
        );
      }
      case "cd": {
        const dir = resolve(cwd, arg);
        if (!dir) return out(`cd: no such page: ${arg}`, "err");
        if (dir !== cwd) go(dir);
        return [];
      }
      case "pwd":
        return out(cwd);
      case "cat": {
        const text = FILES[cwd]?.[arg];
        if (!arg) return out("cat: which file? try `ls`", "err");
        return text ? out(text) : out(`cat: ${arg}: No such file`, "err");
      }
      case "whoami":
        return out("Ivan Shishkin — CS @ UC Irvine, working toward safer AI.");
      case "open": {
        const href = LINKS[arg.toLowerCase()];
        if (!href) return out(`open: try one of: ${Object.keys(LINKS).join(", ")}`, "err");
        window.open(href, "_blank", "noopener,noreferrer");
        return out(`opening ${href}`, "muted");
      }
      case "email":
        navigator.clipboard.writeText(EMAIL);
        return out(`copied ${EMAIL} to clipboard`);
      case "echo":
        return out(arg);
      case "sudo":
        return out("ivan is not in the sudoers file. This incident will be reported.", "err");
      case "exit":
        close();
        return [];
      default:
        return out(`command not found: ${cmd}. Try \`help\`.`, "err");
    }
  }

  function submit() {
    const text = input;
    setInput("");
    setCursor(-1);
    if (text.trim()) setHistory((h) => [...h, text]);
    if (text.trim() === "clear") {
      setLines([]);
      return;
    }
    const output = run(text);
    setLines((l) => [...l, { kind: "cmd", cwd, text }, ...output]);
  }

  function complete() {
    const [cmd, ...rest] = input.split(" ");
    if (rest.length === 0) {
      const names = COMMANDS.map(([n]) => n.split(" ")[0]).filter((n) => n.startsWith(cmd));
      if (names.length === 1) setInput(names[0] + " ");
      return;
    }
    const partial = rest.join(" ");
    const options =
      cmd === "open"
        ? Object.keys(LINKS)
        : cmd === "cat"
          ? Object.keys(FILES[cwd] ?? {})
          : childrenOf(cwd).map((d) => d + "/").concat("../");
    const hits = options.filter((o) => o.startsWith(partial));
    if (hits.length === 1) setInput(`${cmd} ${hits[0]}`);
    else if (hits.length > 1) {
      setLines((l) => [
        ...l,
        { kind: "cmd", cwd, text: input },
        { kind: "out", body: hits.join("  "), tone: "muted" },
      ]);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "Tab") {
      e.preventDefault();
      complete();
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      if (!history.length) return;
      const next =
        e.key === "ArrowUp"
          ? cursor === -1 ? history.length - 1 : Math.max(0, cursor - 1)
          : cursor === -1 ? -1 : cursor + 1;
      if (next === -1 || next >= history.length) {
        setCursor(-1);
        setInput("");
      } else {
        setCursor(next);
        setInput(history[next]);
      }
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      setLines([]);
    } else if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      setLines((l) => [...l, { kind: "cmd", cwd, text: input + "^C" }]);
      setInput("");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="terminal"
      aria-label="Terminal"
      onClick={(e) => {
        if (e.target === dialogRef.current) close();
        else if (!window.getSelection()?.toString()) inputRef.current?.focus();
      }}
    >
      <div className="term-bar">
        <span className="term-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="term-title">ivan@uci: {cwd}</span>
        <button type="button" className="term-close" onClick={close} aria-label="Close terminal">
          esc
        </button>
      </div>
      <div className="term-screen" ref={screenRef}>
        {lines.map((line, i) =>
          line.kind === "cmd" ? (
            <div key={i} className="term-line">
              <Prompt cwd={line.cwd} /> {line.text}
            </div>
          ) : (
            <div key={i} className={`term-line${line.tone ? ` term-${line.tone}` : ""}`}>
              {line.body}
            </div>
          ),
        )}
        <label className="term-line term-input-row">
          <Prompt cwd={cwd} />
          <input
            ref={inputRef}
            className="term-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            aria-label="Command"
          />
        </label>
      </div>
    </dialog>
  );
}
