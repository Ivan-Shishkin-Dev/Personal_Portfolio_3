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
        <div className="entry" id="digital-learning-lab">
          <div className="when">May 2026 - present</div>
          <div className="who"><a href="https://www.computingandaiforall.org/reu.html" target="_blank" rel="noopener noreferrer">Undergraduate Student Researcher</a>, <em><a href="https://www.digitallearninglab.org/" target="_blank" rel="noopener noreferrer">UCI Digital Learning Lab</a></em></div>
          <div className="body">Paid research with the <a href="https://www.computingandaiforall.org/" target="_blank" rel="noopener noreferrer">Computing and AI for All</a> initiative. Building <a href="https://sinq.studio" target="_blank" rel="noopener noreferrer">Science Inquiry Studio</a>, an AI-supported science platform for grades 6&ndash;8 that has students utilize AI to learn important scientific topics while practicing AI literacy.</div>
        </div>
        <div className="entry">
          <div className="when">Nov 2025 - present</div>
          <div className="who">Full Stack Engineer, <em><a href="https://www.pcii-usa.com/" target="_blank" rel="noopener noreferrer">Pacific Coast Industrial Installers</a></em></div>
          <div className="body">Co-developing a $10K-funded mobile app that consolidates contractor verification, insurance, licensing, and safety certifications into a single platform, replacing multi-day back-and-forth with agents and phone calls.</div>
        </div>
        <div className="entry">
          <div className="when">Aug 2025 - present</div>
          <div className="who">Center Attendant, <em><a href="https://housing.uci.edu/arroyo-vista/" target="_blank" rel="noopener noreferrer">UCI Arroyo Vista Housing</a></em></div>
          <div className="body">Front-facing housing operations supporting 100+ resident requests weekly across a large on-campus community.</div>
        </div>
        <h2 className="group-label">Volunteering</h2>
        <div className="entry">
          <div className="when">May 2026 - present</div>
          <div className="who">Director, <em><a href="https://aisafetyuci.org/team" target="_blank" rel="noopener noreferrer">AI Safety Collective @ UCI</a></em></div>
          <div className="body">Lead day-to-day operations and the collective&rsquo;s online presence while building the &ldquo;How to not lose your job&rdquo; portion of the fall fellowship.</div>
        </div>
        <div className="entry" id="director-of-housing">
          <div className="when">Oct 2024 - Sep 2025</div>
          <div className="who">Director of Housing, <em>Sigma Pi Fraternity</em></div>
          <div className="body">Oversaw housing operations for a 100+ member chapter, managing landlord, realtor, and student-group relationships across multiple properties. Represented the chapter at the Tony Siress Leadership Summit in Lanier Islands, GA.</div>
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
