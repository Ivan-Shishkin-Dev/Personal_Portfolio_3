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

const Past = () => (
  <em style={{ color: "var(--subtle)", fontStyle: "normal", fontSize: 11 }}>
    {" "}
    (formerly)
  </em>
);

const Primary = () => (
  <em style={{ color: "var(--subtle)", fontStyle: "normal", fontSize: 11 }}>
    {" "}
    (daily driver)
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
            Python<Sep />C / C++<Sep />JavaScript<Sep />SQL<Sep />LaTeX<Sep />TypeScript<Learning /><Sep />Bash<Learning /><Sep />Lua<Learning />
          </div>
        </div>
        <div className="skill">
          <div className="group">Web</div>
          <div className="items">
            React<Sep />Next.js<Sep />Tailwind<Sep />Animation (Three.js, GSAP, Framer Motion)
          </div>
        </div>
        <div className="skill">
          <div className="group">Backend & data</div>
          <div className="items">
            Node.js / Express<Sep />Python web (Django, Flask, FastAPI)<Sep />APIs (REST, GraphQL, WebSockets)<Sep />SQL DBs (Postgres, MySQL, SQLite)<Sep />Supabase
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
            Neovim<Primary /><Sep />Cursor<Sep />PyCharm / VS Code<Past /><Sep />CLI tools (Claude Code, Copilot, Antigravity)
          </div>
        </div>
        <div className="skill">
          <div className="group">
            AI / LLMs
            <span className="note">Everyone has these; just showing what I use:</span>
          </div>
          <div className="items">
            Agents (tool use)<Sep />RAG<Sep />LLM APIs (OpenAI, Anthropic)<Sep />Browser-use agents<Sep />LLM chat (ChatGPT, Claude, Gemini, NotebookLM)
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
