import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import HobbyItem from "@/components/HobbyItem";

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
        <HobbyItem title="AI Safety @ UCI" summary="Student org focused on AI safety." titleHref="https://aisafetyuci.org/">
          <ul>
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
    </SectionLayout>
  );
}
