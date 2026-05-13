import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Education",
  description: "Main focus.",
};

export default function EducationPage() {
  return (
    <SectionLayout slug="education">
      <div className="entries">
        <div className="entry">
          <div className="when">Aug 2024 - Jun 2028</div>
          <div className="who">B.S. in Computer Science, <em>UC Irvine</em></div>
          <dl className="entry-fields">
            <div>
              <dt>GPA</dt>
              <dd>3.8</dd>
            </div>
            <div>
              <dt>Awards</dt>
              <dd>Dean's Honor's List (5×). Order of Omega (Greek leadership honor society).</dd>
            </div>
            <div>
              <dt>Activities</dt>
              <dd>
                Sigma Pi (Eta-Upsilon Chapter), AI Safety @ UCI, ICS Student Council Mentorship Program (weekly interview prep with a TP-Link engineer), and{" "}
                <a href="https://claoc.org/" target="_blank" rel="noopener noreferrer">CLAOC Mentorship</a> (OC Fellows pairing, 5-month program).
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "40px 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>Coursework</em></h2>
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

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "40px 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>Continuing</em></h2>
      <p style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 20 }}>CodePath cohorts running summer 2026.</p>
      <div className="courses">
        <div className="course"><span className="code">AI 301</span><span>AI Open Source Capstone</span></div>
        <div className="course"><span className="code">TIP 103</span><span>Advanced Interview Prep</span></div>
        <div className="course"><span className="code">CYB 102</span><span>Threat Intelligence & Triage</span></div>
      </div>
    </SectionLayout>
  );
}
