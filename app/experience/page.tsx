import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "Experience",
  description: "Jobs, internships, and volunteer work.",
};

export default function ExperiencePage() {
  return (
    <SectionLayout slug="experience">
      <div className="entries">
        <div className="entry">
          <div className="when">May 2026 - present</div>
          <div className="who">Undergraduate Student Researcher, <em>UCI Digital Learning Lab</em></div>
          <div className="body">Paid research with the Computing and AI for All initiative. Building middle-school coding and science curriculum on the CreatiCode platform and studying responsible AI integration in K-12 classrooms.</div>
        </div>
        <div className="entry">
          <div className="when">Nov 2025 - present</div>
          <div className="who">Full Stack Engineer, <em>Pacific Coast Industrial Installers</em></div>
          <div className="body">Co-developing a $10K-funded mobile app that consolidates contractor verification, insurance, licensing, and safety certifications into a single platform, replacing multi-day back-and-forth with agents and phone calls.</div>
        </div>
        <div className="entry">
          <div className="when">Aug 2025 - present</div>
          <div className="who">Center Attendant, <em>UCI Arroyo Vista Housing</em></div>
          <div className="body">Front-facing housing operations supporting 100+ resident requests weekly across a large on-campus community.</div>
        </div>
        <div className="entry">
          <div className="when">Sep 2023 - Jan 2024</div>
          <div className="who">Warehouse Associate, <em>Wrawp LLC</em></div>
          <div className="body">Inventory and packaging operations in a fast-paced production environment.</div>
        </div>
        <h2 className="group-label">Volunteering</h2>
        <div className="entry">
          <div className="when">Oct 2024 - Sep 2025</div>
          <div className="who">Director of Housing, <em>Sigma Pi Fraternity</em></div>
          <div className="body">Oversaw housing operations for a 100+ member chapter, managing landlord, realtor, and student-group relationships across multiple properties.</div>
        </div>
        <div className="entry">
          <div className="when">Oct 2022 - Oct 2024</div>
          <div className="who">Project Manager, <em>Project Art Start</em></div>
          <div className="body">Led exhibit-based art lessons and multi-visit programs for elementary students. Plenty of public-speaking practice with a lively audience. Some pictures attached on my <a href="https://www.linkedin.com/in/ivan-shishkin-dev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</div>
        </div>
      </div>
    </SectionLayout>
  );
}
