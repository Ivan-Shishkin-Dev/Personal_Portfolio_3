import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Education",
  description: "UC Irvine — CS, B.S.",
};

export default function EducationPage() {
  return (
    <SectionLayout slug="education">
      <div className="entries">
        <div className="entry">
          <div className="who"><em>University of California, Irvine</em></div>
          <div className="body" style={{ color: "var(--ink)", fontStyle: "normal" }}>B.S. in Computer Science · 2023 — 2027 (expected)</div>
          <div className="body">Concentration in Intelligent Systems. GPA: 3.8. Dean's Honor List, Fall 2024 & Spring 2025. Member of the AI Safety Reading Group and ACM @ UCI.</div>
        </div>
        <div className="entry">
          <div className="who">Selected awards</div>
          <div className="body">— UCI Undergraduate Research Opportunities Program (UROP) Fellow, 2025<br />— ICS Excellence Scholarship, 2024<br />— National Merit Commended Student, 2023</div>
        </div>
      </div>

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "40px 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>Coursework</em></h2>
      <p style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 20 }}>Classes that mattered, roughly chronological.</p>
      <div className="courses">
        <div className="course"><span className="code">ICS 33</span><span>Intermediate Programming</span></div>
        <div className="course"><span className="code">ICS 46</span><span>Data Structures</span></div>
        <div className="course"><span className="code">ICS 51</span><span>Computer Organization</span></div>
        <div className="course"><span className="code">ICS 53</span><span>Principles of System Design</span></div>
        <div className="course"><span className="code">CS 161</span><span>Design and Analysis of Algorithms</span></div>
        <div className="course"><span className="code">CS 171</span><span>Introduction to Artificial Intelligence</span></div>
        <div className="course"><span className="code">CS 178</span><span>Machine Learning & Data Mining</span></div>
        <div className="course"><span className="code">CS 179</span><span>Project in AI</span></div>
        <div className="course"><span className="code">MATH 2D</span><span>Multivariable Calculus</span></div>
        <div className="course"><span className="code">MATH 3A</span><span>Linear Algebra</span></div>
        <div className="course"><span className="code">STAT 67</span><span>Probability & Statistics for CS</span></div>
        <div className="course"><span className="code">PHIL 4</span><span>Introduction to Ethics</span></div>
      </div>
    </SectionLayout>
  );
}
