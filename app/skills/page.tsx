import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, tools, other.",
};

const Learning = () => (
  <em style={{ color: "var(--subtle)", fontStyle: "normal", fontSize: 11 }}>
    {" "}
    (learning)
  </em>
);

const Sep = () => <span className="sep"> · </span>;

export default function SkillsPage() {
  return (
    <SectionLayout slug="skills">
      <div className="skills">
        <div className="skill">
          <div className="group">Languages</div>
          <div className="items">
            Python<Sep />C++<Sep />C<Sep />JavaScript<Sep />SQL<Sep />LaTeX<Sep />TypeScript<Learning /><Sep />Bash<Learning />
          </div>
        </div>
        <div className="skill">
          <div className="group">Web</div>
          <div className="items">
            HTML<Sep />CSS<Sep />React<Sep />Next.js<Sep />Tailwind<Sep />Three.js<Sep />GSAP<Sep />Framer Motion
          </div>
        </div>
        <div className="skill">
          <div className="group">Backend & data</div>
          <div className="items">
            Node.js<Sep />Supabase<Sep />Express<Sep />Python web (Django, Flask, FastAPI)<Sep />REST<Sep />GraphQL<Sep />WebSockets<Sep />SQL DBs (Postgres, MySQL, SQLite)
          </div>
        </div>
        <div className="skill">
          <div className="group">DevOps / infra</div>
          <div className="items">
            Git/GitHub<Sep />Linux<Sep />GitHub Actions<Sep />Vercel<Sep />Docker<Sep />Kubernetes<Sep />Cloudflare
          </div>
        </div>
        <div className="skill">
          <div className="group">Editors & AI dev tools</div>
          <div className="items">
            VS Code<Sep />Cursor<Sep />Claude Code<Sep />GitHub Copilot<Sep />PyCharm<Sep />Neovim<Learning />
          </div>
        </div>
        <div className="skill">
          <div className="group">AI / LLMs</div>
          <div className="items">
            LLM chat (ChatGPT, Claude, Gemini)<Sep />Browser-use agents<Sep />Prompt engineering<Sep />Agents (tool use)<Sep />RAG<Sep />LLM APIs (OpenAI, Anthropic)
          </div>
        </div>
        <div className="skill">
          <div className="group">Languages (human)</div>
          <div className="items">
            English<Sep />Russian
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
