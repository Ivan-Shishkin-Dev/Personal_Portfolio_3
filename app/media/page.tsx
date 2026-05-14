import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import ReadingList from "@/components/ReadingList";

export const metadata: Metadata = {
  title: "Media",
  description: "Stuff I enjoy consuming.",
};

export default function MediaPage() {
  return (
    <SectionLayout slug="media">
      <div className="media">
      <section className="hobby-category">
        <div className="hobby-category-title">Substack</div>
        <ul className="media-list">
          <li className="media-item">
            <a
              className="media-name"
              href="https://hsmiller76.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harry Miller
            </a>
            <p className="media-note">
              What a way with words. Football player and philosopher — an unusual collective of experiences.
            </p>
          </li>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">YouTube</div>
        <ul className="media-list">
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.youtube.com/@jubilee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jubilee (Surrounded)
            </a>
            <p className="media-note">People disagreeing — and learning from it.</p>
          </li>
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.youtube.com/@CosmicSkeptic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alex O&apos;Connor
            </a>
            <p className="media-note">
              Earnest conversations about the questions most people skirt — kindred to the{" "}
              <a
                href="https://www.benkuhn.net/abyss/"
                target="_blank"
                rel="noopener noreferrer"
              >
                staring-into-the-abyss
              </a>{" "}
              idea from my bio.
            </p>
          </li>
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.youtube.com/@MikeIsraetelMakingProgress"
              target="_blank"
              rel="noopener noreferrer"
            >
              Making Progress
            </a>
            <p className="media-note">
              <a
                href="https://www.youtube.com/channel/UCfQgsKhHjSyRLOp9mnffqVg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mike Israetel&apos;s
              </a>{" "}
              side channel, away from the lifting content. Heavy on Ayn Rand by his own admission.
            </p>
          </li>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">Newsletters</div>
        <ul className="media-list">
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.arjaythedev.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arjay McCandles
            </a>
            <p className="media-note">
              Found him on TikTok; succinct full-stack answers. Replied kindly when I reached out.
            </p>
          </li>
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.morningbrew.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Morning Brew
            </a>
            <p className="media-note">Up-to-date news, summarized.</p>
          </li>
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.techbrew.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tech Brew
            </a>
            <p className="media-note">
              Tech news, summarized. Often duplicates Morning Brew — a reminder that tech news at this point in time is world news.
            </p>
          </li>
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.antislop.xyz/newsletter"
              target="_blank"
              rel="noopener noreferrer"
            >
              AntiSlop
            </a>
            <p className="media-note">
              Recommended by a panelist at an Anthropic event. Good takes, good quotes every morning.
            </p>
          </li>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">Podcasts</div>
        <ul className="media-list">
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.youtube.com/@BadFriends"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bad Friends
            </a>
            <p className="media-note">
              Watched every episode. Andrew and Bobby&apos;s dynamic is endearing.
            </p>
          </li>
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.youtube.com/@rickglassman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take Your Shoes Off
            </a>
            <p className="media-note">
              Rick Glassman and his guests can riff from topic to topic. A must check-out.
            </p>
          </li>
          <li className="media-item">
            <a
              className="media-name"
              href="https://www.youtube.com/@hubermanlab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrew Huberman
            </a>
            <p className="media-note">Important, interesting topics shared succinctly.</p>
          </li>
          <li className="media-item">
            <a
              className="media-name"
              href="https://open.spotify.com/show/1gVshwQYETZFObSi1CJaJk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Higher Up Wellness
            </a>
            <p className="media-note">
              Michael Smoak&apos;s recent controversy aside, I can take positives from anyone. Taught me the value of clear, plain-spoken communication.
            </p>
          </li>
          <li className="media-item">
            <a
              className="media-name"
              href="https://open.spotify.com/show/0XrOqvxlqQI6bmdYHuIVnr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Modern Wisdom
            </a>
            <p className="media-note">
              Chris Williamson — club promoter turned modern-day &ldquo;philosopher&rdquo; and interviewer. Good questions, good time.
            </p>
          </li>
        </ul>
      </section>

      <section className="hobby-category">
        <div className="hobby-category-title">Books / Rabbit holes / Articles</div>
        <ul className="media-list">
          <ReadingList />
        </ul>
      </section>

      <p className="media-coda">
        Probably not comprehensive and ever growing. Recommendations appreciated.
      </p>
      </div>
    </SectionLayout>
  );
}
