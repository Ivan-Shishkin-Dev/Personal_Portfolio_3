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
          <div className="body">GPA: 3.8. Dean's Honor's List (5 times).</div>
          <div className="body">Activities: Sigma Pi (Eta-Upsilon Chapter), AI Safety @ UCI, ICS Student Council Mentorship Program, and <a href="https://claoc.org/" target="_blank" rel="noopener noreferrer">CLAOC Mentorship</a>.</div>
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
    </SectionLayout>
  );
}
