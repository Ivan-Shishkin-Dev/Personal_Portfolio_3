import type { Metadata } from "next";
import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Hobbies",
  description: "What do I do?",
};

export default function HobbiesPage() {
  return (
    <SectionLayout slug="hobbies">
      <p>Outside of school and screens — the things I keep coming back to.</p>
      <div className="entries" style={{ marginTop: 24 }}>
        <div className="entry">
          <div className="who"><em>Lifting & running</em></div>
          <div className="body">Four lifts a week, easy runs on the strand when the marine layer lifts. The repetition is half the point.</div>
        </div>
        <div className="entry">
          <div className="who"><em>Reading</em></div>
          <div className="body">Mostly nonfiction — ML, philosophy of mind, a little economics. Sci-fi when I need a break. See <Link href="/media" style={{ color: "var(--accent)", borderBottom: "0.5px solid var(--rule)" }}>Media</Link>.</div>
        </div>
        <div className="entry">
          <div className="who"><em>Writing</em></div>
          <div className="body">Essays for myself, mostly. Trying to think on paper instead of just thinking.</div>
        </div>
        <div className="entry">
          <div className="who"><em>Cooking</em></div>
          <div className="body">Eastern European staples from my mom's kitchen. Borscht, pelmeni, the occasional ambitious bread.</div>
        </div>
        <div className="entry">
          <div className="who"><em>Side projects</em></div>
          <div className="body">Half-finished. The list grows faster than I can ship. I'm okay with that.</div>
        </div>
        <div className="entry">
          <div className="who"><em>Chess & coffee</em></div>
          <div className="body">Bullet on Lichess, slow pour-overs in the morning. One sharpens, one slows down.</div>
        </div>
      </div>
    </SectionLayout>
  );
}
