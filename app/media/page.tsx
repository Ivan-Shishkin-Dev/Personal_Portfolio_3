import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Media",
  description: "Stuff I enjoy consuming.",
};

export default function MediaPage() {
  return (
    <SectionLayout slug="media">
      <p style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 24 }}>A rough log of what I've been into lately — books, podcasts, films, the occasional rabbit hole.</p>
      <div className="entries">
        <div className="reading-row"><span><em>The Alignment Problem</em> <span style={{ color: "var(--muted)" }}>— Brian Christian</span></span><span className="state active">re-reading</span></div>
        <div className="reading-row"><span><em>Information Theory, Inference, and Learning Algorithms</em> <span style={{ color: "var(--muted)" }}>— David MacKay</span></span><span className="state active">in progress</span></div>
        <div className="reading-row"><span><em>The Pragmatic Programmer</em> <span style={{ color: "var(--muted)" }}>— Hunt & Thomas</span></span><span className="state">finished</span></div>
        <div className="reading-row"><span><em>Gödel, Escher, Bach</em> <span style={{ color: "var(--muted)" }}>— Douglas Hofstadter</span></span><span className="state">finished</span></div>
        <div className="reading-row"><span><em>Designing Data-Intensive Applications</em> <span style={{ color: "var(--muted)" }}>— Martin Kleppmann</span></span><span className="state">finished</span></div>
        <div className="reading-row"><span><em>Stories of Your Life</em> <span style={{ color: "var(--muted)" }}>— Ted Chiang</span></span><span className="state">finished</span></div>
        <div className="reading-row"><span><em>Pattern Recognition and Machine Learning</em> <span style={{ color: "var(--muted)" }}>— Bishop</span></span><span className="state active">reference</span></div>
      </div>
    </SectionLayout>
  );
}
