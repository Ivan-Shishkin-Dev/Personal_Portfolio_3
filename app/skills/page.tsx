import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, tools, other.",
};

const Sep = () => <span className="sep"> · </span>;

export default function SkillsPage() {
  return (
    <SectionLayout slug="skills">
      <div className="skills">
        <div className="skill">
          <div className="group">Languages</div>
          <div className="items">
            Python<Sep />C / C++<Sep />JavaScript<Sep />SQL<Sep />LaTeX<Sep />TypeScript<Sep />Bash<Sep />Lua
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
            Neovim<Sep />Cursor<Sep />PyCharm / VS Code<Sep />CLI tools (Claude Code, Copilot, Antigravity)
          </div>
        </div>
        <div className="skill">
          <div className="group">AI / LLMs</div>
          <div className="items">
            Agents (tool use)<Sep />RAG<Sep />LLM APIs (OpenAI, Anthropic)<Sep />Browser-use agents<Sep />LLM chat (ChatGPT, Claude, Gemini, NotebookLM)
          </div>
        </div>
        <div className="skill">
          <div className="group">Spoken languages</div>
          <div className="items">
            English<Sep />Russian
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
