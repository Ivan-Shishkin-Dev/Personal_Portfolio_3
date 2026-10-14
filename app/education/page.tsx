import type { Metadata } from "next";
import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";
import Toggle from "@/components/Toggle";
import ExpandAll from "@/components/ExpandAll";

export const metadata: Metadata = {
  title: "Education",
  description: "Main focus.",
};

export default function EducationPage() {
  return (
    <SectionLayout slug="education">
      <ExpandAll />
      <div className="toggles">
        <Toggle meta="Aug 2024 - Jun 2028" title={<>B.S. in Computer Science, <em>UC Irvine</em></>}>
          <div className="body">
            GPA 3.8 (Dean&apos;s Honors List, 6×).
            <ul>
              <li>Member of the <a href="https://ics.uci.edu/honors/" target="_blank" rel="noopener noreferrer">ICS Honors Program</a>, which connects undergraduates with faculty research.</li>
              <li>Awarded the Magnificent Obsession Perpetual Scholarship of $5,000 for the 2026&ndash;2027 academic year.</li>
            </ul>
          </div>
        </Toggle>

        <h2 className="group-label">School activities</h2>
        <Toggle title={<><a href="https://sigmapi.org/" target="_blank" rel="noopener noreferrer">Sigma Pi</a> <span className="toggle-sub">Eta-Upsilon Chapter</span></>}>
          <div className="body">
            <ul>
              <li>Served as the chapter&apos;s <Link href="/experience#director-of-housing">Director of Housing</Link>, managing properties and relationships for 100+ members.</li>
              <li>Got to go to Georgia for the <a href="https://sigmapi.org/event-directory/tsls/" target="_blank" rel="noopener noreferrer">Tony Siress Leadership Summit</a>.</li>
              <li>Got tapped for <a href="https://orderofomega.org/" target="_blank" rel="noopener noreferrer">Order of Omega</a>, a leadership honor society for fraternity and sorority members.</li>
              <li>Received the <a href="https://sigmapi.org/foundations/scholarships/" target="_blank" rel="noopener noreferrer">Byron R. Lewis Academic Scholarship</a> of $2,500.</li>
            </ul>
          </div>
        </Toggle>
        <Toggle title={<>Mentorship <span className="toggle-sub">CLAOC, OC Fellows, and ICS Student Council</span></>}>
          <div className="body">
            <ul>
              <li><a href="https://claoc.org/" target="_blank" rel="noopener noreferrer">CLAOC</a> + <a href="https://ocfellows.org/" target="_blank" rel="noopener noreferrer">OC Fellows</a> — a partnership between the CEO Leadership Alliance Orange County and Orange County Fellows, building a talent pipeline from universities to Orange County schools. Great experience, learned a lot.</li>
              <li><a href="https://studentcouncil.ics.uci.edu/" target="_blank" rel="noopener noreferrer">ICS Student Council Mentorship</a> — matched with a mentor to help me land an internship.</li>
            </ul>
          </div>
        </Toggle>
        <Toggle title={<><a href="https://bluedot.org/" target="_blank" rel="noopener noreferrer">BlueDot Impact</a> <span className="toggle-sub">AI safety courses</span></>}>
          <div className="body">
            <ul>
              <li><a href="https://bluedot.org/courses/future-of-ai" target="_blank" rel="noopener noreferrer">Future of AI</a> — 2 hours. Where AI is headed and the choices that come with it.</li>
              <li><a href="https://bluedot.org/courses/agi-strategy" target="_blank" rel="noopener noreferrer">AGI Strategy</a> — 25 hours. The AI safety landscape and how to pick a direction within it.</li>
              <li><a href="https://bluedot.org/courses/technical-ai-safety" target="_blank" rel="noopener noreferrer">Technical AI Safety</a> — 30 hours. Hands-on work on the technical side of making AI systems safe.</li>
            </ul>
          </div>
        </Toggle>
      </div>

      <h2 id="self-education">Self-education</h2>
      <p>
        As I&apos;ve mentioned, this is something I really care about. The link below takes you to what I&apos;ve been watching and reading.
      </p>
      <p>
        <Link className="media-name" href="/consumed-content">Consumed content</Link>
      </p>
    </SectionLayout>
  );
}
