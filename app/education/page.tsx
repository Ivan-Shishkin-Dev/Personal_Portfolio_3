import type { Metadata } from "next";
import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";
import HobbyItem from "@/components/HobbyItem";
import NotionLink from "@/components/NotionLink";

export const metadata: Metadata = {
  title: "Education",
  description: "Main focus.",
};

export default function EducationPage() {
  return (
    <SectionLayout slug="education">
      <div className="entries" style={{ marginTop: -20 }}>
        <div className="entry">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
            <div className="who">B.S. in Computer Science, <em>UC Irvine</em></div>
            <div className="when" style={{ marginBottom: 0, whiteSpace: "nowrap" }}>Aug 2024 - Jun 2028</div>
          </div>
          <div className="body">GPA 3.8 (Dean's Honors List, 6×).</div>
          <p style={{ fontFamily: "var(--ser)", fontStyle: "italic", fontSize: 13.5, lineHeight: 1.6, color: "var(--subtle)", margin: "8px 0 0" }}>Read more about my education by scrolling down.</p>
        </div>
      </div>

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "32px 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>School Activities</em></h2>
      <ul className="hobbies">
        <HobbyItem title="Sigma Pi" summary="Eta-Upsilon Chapter." titleHref="https://sigmapi.org/" alwaysOpen>
          <ul>
            <li>Served as the chapter&apos;s <Link href="/experience#director-of-housing">Director of Housing</Link>, managing properties and relationships for 100+ members.</li>
            <li>Got to go to Georgia for the <a href="https://sigmapi.org/event-directory/tsls/" target="_blank" rel="noopener noreferrer">Tony Siress Leadership Summit</a>.</li>
            <li>Got tapped for <a href="https://orderofomega.org/" target="_blank" rel="noopener noreferrer">Order of Omega</a>, a leadership honor society for fraternity and sorority members.</li>
            <li>Received the <a href="https://sigmapi.org/foundations/scholarships/" target="_blank" rel="noopener noreferrer">Byron R. Lewis Academic Scholarship</a>.</li>
          </ul>
        </HobbyItem>
        <HobbyItem title="Mentorship" summary="CLAOC, OC Fellows, and ICS Student Council." alwaysOpen>
          <ul>
            <li><a href="https://claoc.org/" target="_blank" rel="noopener noreferrer">CLAOC</a> + <a href="https://ocfellows.org/" target="_blank" rel="noopener noreferrer">OC Fellows</a> — a partnership between the CEO Leadership Alliance Orange County and Orange County Fellows, building a talent pipeline from universities to Orange County schools. Great experience, learned a lot.</li>
            <li><a href="https://studentcouncil.ics.uci.edu/" target="_blank" rel="noopener noreferrer">ICS Student Council Mentorship</a> — matched with a mentor to help me land an internship.</li>
          </ul>
        </HobbyItem>
      </ul>

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "60px 0 20px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>Standout Coursework</em></h2>
      <div className="courses">
        <div className="course"><span className="code">ICS 33</span><span>Intermediate Programming in Python</span></div>
        <div className="course"><span className="code">ICS 6D</span><span>Discrete Math for CS</span></div>
        <div className="course"><span className="code">MATH 2B</span><span>Calculus II</span></div>
        <div className="course"><span className="code">STATS 67</span><span>Probability & Statistics for CS</span></div>
        <div className="course"><span className="code">MATH 3A</span><span>Linear Algebra</span></div>
        <div className="course"><span className="code">ICS 46</span><span>Data Structure Implementation & Analysis (in C++)</span></div>
        <div className="course"><span className="code">ICS 51</span><span>Computer Organization</span></div>
        <div className="course"><span className="code">INF 43</span><span>Software Engineering</span></div>
      </div>

      <h2 id="self-education" style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "60px 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)", scrollMarginTop: 90 }}><em>Self-Education</em></h2>
      <p style={{ marginBottom: 8 }}>
        As I&apos;ve mentioned, this is something I really care about. The link below takes you to my future readings, some of my favorite people, and a few things I&apos;ve especially enjoyed.
      </p>
      <NotionLink />
    </SectionLayout>
  );
}
