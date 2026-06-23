import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import HobbyItem from "@/components/HobbyItem";
import ReadingList from "@/components/ReadingList";

export const metadata: Metadata = {
  title: "Education",
  description: "Main focus.",
};

export default function EducationPage() {
  return (
    <SectionLayout slug="education">
      <div className="entries" style={{ marginTop: -20, borderBottom: "0.5px solid var(--rule)" }}>
        <div className="entry">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
            <div className="who">B.S. in Computer Science, <em>UC Irvine</em></div>
            <div className="when" style={{ marginBottom: 0, whiteSpace: "nowrap" }}>Aug 2024 - Jun 2028</div>
          </div>
          <div className="body">GPA 3.8 (Dean's Honor's List, 5×).</div>
          <p style={{ fontFamily: "var(--ser)", fontStyle: "italic", fontSize: 13.5, lineHeight: 1.6, color: "var(--subtle)", margin: "8px 0 0" }}>Read more about my education by scrolling down.</p>
        </div>
      </div>

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "60px 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>Activities</em></h2>
      <p style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 20 }}>Some more things I do.</p>
      <ul className="hobbies">
        <HobbyItem title="Director of AI Safety @ UCI" summary="Student org focused on AI safety." titleHref="https://aisafetyuci.org/">
          <ul>
            <li>Currently in charge of operations and creating the “How to not lose your job” portion of the fall fellowship.</li>
            <li>Where I spend most of my time to be honest.</li>
            <li>Too much I do for this to briefly explain here — learning, reading, doing.</li>
          </ul>
        </HobbyItem>
        <HobbyItem title="Sigma Pi" summary="Eta-Upsilon Chapter." titleHref="https://sigmapi.org/">
          <ul>
            <li>Hanging out with my guys.</li>
            <li>Was director of housing for a bit.</li>
            <li>Got to go to Georgia for the <a href="https://sigmapi.org/event-directory/tsls/" target="_blank" rel="noopener noreferrer">Tony Siress Leadership Summit</a> — super fun.</li>
            <li>Got tapped for <a href="https://orderofomega.org/" target="_blank" rel="noopener noreferrer">Order of Omega</a>, a leadership honor society for fraternity and sorority members.</li>
            <li>Received the <a href="https://sigmapi.org/foundations/scholarships/" target="_blank" rel="noopener noreferrer">Byron R. Lewis Academic Scholarship</a>.</li>
          </ul>
        </HobbyItem>
        <HobbyItem title="Mentorship" summary="CLAOC, OC Fellows, and ICS Student Council.">
          <ul>
            <li><a href="https://claoc.org/" target="_blank" rel="noopener noreferrer">CLAOC</a> + <a href="https://ocfellows.org/" target="_blank" rel="noopener noreferrer">OC Fellows</a> — a partnership between the CEO Leadership Alliance Orange County and Orange County Fellows, building a talent pipeline from universities to Orange County schools. Great experience, learned a lot.</li>
            <li><a href="https://studentcouncil.ics.uci.edu/" target="_blank" rel="noopener noreferrer">ICS Student Council Mentorship</a> — matched with a mentor to help me land an internship. That damn LeetCode bro.</li>
          </ul>
        </HobbyItem>
      </ul>

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "60px 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>Coursework</em></h2>
      <p style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 20 }}>Classes that mattered.</p>
      <div className="courses">
        <div className="course"><span className="code">ICS 6B</span><span>Boolean Logic & Discrete Structures</span></div>
        <div className="course"><span className="code">MATH 2A</span><span>Calculus I</span></div>
        <div className="course"><span className="code">ICS 33</span><span>Intermediate Programming in Python</span></div>
        <div className="course"><span className="code">ICS 6D</span><span>Discrete Math for CS</span></div>
        <div className="course"><span className="code">MATH 2B</span><span>Calculus II</span></div>
        <div className="course"><span className="code">ICS 45C</span><span>Programming in C/C++</span></div>
        <div className="course"><span className="code">STATS 67</span><span>Probability & Statistics for CS</span></div>
        <div className="course"><span className="code">MATH 3A</span><span>Linear Algebra</span></div>
        <div className="course"><span className="code">ICS 46</span><span>Data Structure Implementation & Analysis</span></div>
        <div className="course"><span className="code">ICS 51</span><span>Computer Organization</span></div>
        <div className="course"><span className="code">INF 43</span><span>Software Engineering</span></div>
      </div>

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "60px 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>Self-Education</em></h2>
      <p style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 20 }}>
        A list, not an endorsement. If someone here has said something out of pocket, I likely already know — and likely agree. I take what&apos;s worth taking and leave the rest.
      </p>
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
            <li className="media-item">
              <a
                className="media-name"
                href="https://www.youtube.com/c/theprimeagen"
                target="_blank"
                rel="noopener noreferrer"
              >
                ThePrimeagen
              </a>
              <p className="media-note">
                Inspiring story (meth → software dev), funny guy, and helped me set up Neovim.
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
