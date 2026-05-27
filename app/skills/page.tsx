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
            React<Sep />Next.js<Sep />Tailwind<Sep />Three.js<Sep />GSAP<Sep />Framer Motion
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
            Cursor<Sep />CLI tools (Claude Code, Copilot, Antigravity)<Sep />PyCharm / VS Code<Past /><Sep />Neovim<Learning />
          </div>
        </div>
        <div className="skill">
          <div className="group">
            AI / LLMs
            <div style={{ fontFamily: "var(--ser)", fontStyle: "italic", fontSize: 12, letterSpacing: 0, textTransform: "none", color: "var(--subtle)", marginTop: 6, lineHeight: 1.4 }}>
              nothing special — everyone has these — but what I play with:
            </div>
          </div>
          <div className="items">
            LLM chat (ChatGPT, Claude, Gemini, NotebookLM)<Sep />Browser-use agents<Sep />Agents (tool use)<Sep />RAG<Sep />LLM APIs (OpenAI, Anthropic)
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
