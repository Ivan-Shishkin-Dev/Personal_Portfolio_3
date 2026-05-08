import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm doing and what I'm chasing.",
};

export default function NowPage() {
  return (
    <SectionLayout slug="now">
      <p style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 32 }}>As of this quarter — Spring 2026.</p>

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "0 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>Doing</em></h2>
      <div className="entries" style={{ marginBottom: 40 }}>
        <div className="now-row"><span className="dash">—</span><span>Studying CS at <em>UC Irvine</em>, currently focused on AI & systems coursework.</span></div>
        <div className="now-row"><span className="dash">—</span><span>Reading <em>The Alignment Problem</em> for the second time, slower this round.</span></div>
        <div className="now-row"><span className="dash">—</span><span>Writing a research note on activation patching for a small transformer.</span></div>
        <div className="now-row"><span className="dash">—</span><span>Building a personal eval harness, run against every model release.</span></div>
        <div className="now-row"><span className="dash">—</span><span>Lifting four times a week. Running when the marine layer lifts.</span></div>
      </div>

      <h2 style={{ fontFamily: "var(--ser)", fontSize: 22, fontWeight: 400, margin: "0 0 12px", paddingBottom: 6, borderBottom: "0.5px solid var(--rule)" }}><em>Goals</em></h2>
      <div className="entries">
        <div className="now-row"><span className="dash">—</span><span>Land a summer internship working on AI — ideally something close to safety or evaluations.</span></div>
        <div className="now-row"><span className="dash">—</span><span>Ship one real project per quarter. Real meaning: someone who isn't me uses it.</span></div>
        <div className="now-row"><span className="dash">—</span><span>Read one technical book and one non-technical book each month.</span></div>
        <div className="now-row"><span className="dash">—</span><span>Get comfortable enough with Lean to follow along with formal-verification papers.</span></div>
        <div className="now-row"><span className="dash">—</span><span>Be a little better at the end of every week than I was at the start.</span></div>
      </div>
    </SectionLayout>
  );
}
