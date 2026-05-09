import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, tools, math.",
};

export default function SkillsPage() {
  return (
    <SectionLayout slug="skills">
      <p style={{ color: "var(--muted)", fontStyle: "italic" }}>In progress.</p>
    </SectionLayout>
  );
}
