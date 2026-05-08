import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email and elsewhere.",
};

export default function ContactPage() {
  return (
    <SectionLayout slug="contact">
      <p>Best by email. I read everything; I try to reply within a few days.</p>
      <div className="contacts" style={{ marginTop: 24 }}>
        <div className="row"><span className="label">Email</span><em>ivan@ivanshishkin.dev</em></div>
        <div className="row"><span className="label">GitHub</span><em>github.com/ivansh</em></div>
        <div className="row"><span className="label">LinkedIn</span><em>linkedin.com/in/ivanshishkin</em></div>
        <div className="row"><span className="label">Twitter</span><em>@ivansh_dev</em></div>
        <div className="row"><span className="label">Scholar</span><em>scholar.google.com/citations?user=…</em></div>
      </div>
      <p style={{ marginTop: 32, color: "var(--muted)", fontStyle: "italic" }}>If you're a recruiter, the fastest path is email with the role title in the subject line.</p>
    </SectionLayout>
  );
}
