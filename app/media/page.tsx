import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Media",
  description: "Stuff I enjoy consuming.",
};

export default function MediaPage() {
  return (
    <SectionLayout slug="media">
      <p style={{ color: "var(--muted)", fontStyle: "italic" }}>In progress.</p>
    </SectionLayout>
  );
}
