import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, tools, math.",
};

export default function SkillsPage() {
  return (
    <SectionLayout slug="skills">
      <div className="skills">
        <div className="skill">
          <div className="group">Languages</div>
          <div className="items">Python<span className="sep"> · </span>TypeScript<span className="sep"> · </span>C<span className="sep"> · </span>C++<span className="sep"> · </span>Rust <em style={{ color: "var(--subtle)", fontStyle: "normal", fontSize: 11 }}>(learning)</em><span className="sep"> · </span>Go<span className="sep"> · </span>Lean <em style={{ color: "var(--subtle)", fontStyle: "normal", fontSize: 11 }}>(learning)</em></div>
        </div>
        <div className="skill">
          <div className="group">ML / AI</div>
          <div className="items">PyTorch<span className="sep"> · </span>JAX<span className="sep"> · </span>HuggingFace<span className="sep"> · </span>Weights & Biases<span className="sep"> · </span>activation patching<span className="sep"> · </span>linear probes</div>
        </div>
        <div className="skill">
          <div className="group">Web</div>
          <div className="items">React<span className="sep"> · </span>Next.js<span className="sep"> · </span>Astro<span className="sep"> · </span>Tailwind<span className="sep"> · </span>Postgres<span className="sep"> · </span>tRPC</div>
        </div>
        <div className="skill">
          <div className="group">Tools</div>
          <div className="items">Linux<span className="sep"> · </span>git<span className="sep"> · </span>tmux<span className="sep"> · </span>Neovim<span className="sep"> · </span>Docker<span className="sep"> · </span>SLURM</div>
        </div>
        <div className="skill">
          <div className="group">Math</div>
          <div className="items">Linear algebra<span className="sep"> · </span>multivariable calc<span className="sep"> · </span>probability<span className="sep"> · </span>discrete math<span className="sep"> · </span>information theory <em style={{ color: "var(--subtle)", fontStyle: "normal", fontSize: 11 }}>(working through)</em></div>
        </div>
        <div className="skill">
          <div className="group">Languages (human)</div>
          <div className="items">English<span className="sep"> · </span>Russian <em style={{ color: "var(--subtle)", fontStyle: "normal", fontSize: 11 }}>(native)</em></div>
        </div>
      </div>
    </SectionLayout>
  );
}
