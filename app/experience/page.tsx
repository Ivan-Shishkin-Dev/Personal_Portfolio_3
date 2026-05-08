import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Experience",
  description: "Internships, research, and TA work.",
};

export default function ExperiencePage() {
  return (
    <SectionLayout slug="experience">
      <div className="entries">
        <div className="entry">
          <div className="when">Sep 2025 — present</div>
          <div className="who">Undergraduate Researcher, <em>UCI ML & Society Lab</em></div>
          <div className="body">Working on small-model interpretability — building tooling for activation patching and writing experiments around fact-retrieval circuits.</div>
        </div>
        <div className="entry">
          <div className="when">Apr 2025 — present</div>
          <div className="who">Teaching Assistant, <em>ICS 33: Intermediate Programming</em></div>
          <div className="body">Two sections per week, weekly office hours, code review on lab submissions. The teaching has made me a better engineer.</div>
        </div>
        <div className="entry">
          <div className="when">Jun 2025 — Sep 2025</div>
          <div className="who">Software Engineering Intern, <em>(open — looking for Summer 2026)</em></div>
          <div className="body">Placeholder — replace with your real internship details when you have them.</div>
        </div>
        <div className="entry">
          <div className="when">2023 — 2024</div>
          <div className="who">Founding member, <em>UCI AI Safety Reading Group</em></div>
          <div className="body">Helped start a weekly reading group on alignment and interpretability. Now ~25 members, meets Thursdays.</div>
        </div>
      </div>
    </SectionLayout>
  );
}
