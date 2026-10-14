import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import DllGallery from "@/components/DllGallery";
import Toggle from "@/components/Toggle";
import ExpandAll from "@/components/ExpandAll";

export const metadata: Metadata = {
  title: "Experience",
  description: "Jobs, internships, and volunteer work.",
};

export default function ExperiencePage() {
  return (
    <SectionLayout slug="experience">
      <ExpandAll />
      <div className="toggles">
        <Toggle
          id="digital-learning-lab"
          meta="May 2026 - Sep 2026"
          title={<><a href="https://www.computingandaiforall.org/reu.html" target="_blank" rel="noopener noreferrer">Undergraduate Student Researcher</a>, <em><a href="https://www.digitallearninglab.org/" target="_blank" rel="noopener noreferrer">UCI Digital Learning Lab</a></em></>}
        >
          <div className="body">
            Selected from ~500 students to participate in the NSF-funded <a href="https://www.computingandaiforall.org/" target="_blank" rel="noopener noreferrer">Computing and AI for All</a> initiative, a $6M+ effort in <a href="https://markwarschauer.com/" target="_blank" rel="noopener noreferrer">Prof. Mark Warschauer&rsquo;s</a> group, the number one lab in digital literacy in the world.
            <ul>
              <li>Built grade 6&ndash;8 science curricula that teach subject matter and AI literacy together, aligned with California&rsquo;s Science Standards and piloted across Orange County districts.</li>
              <li>Co-led the design of <a href="https://sinq.studio" target="_blank" rel="noopener noreferrer">Science Inquiry Studio</a> and the Science + AI team, prototyping games and simulations that fold LLMs, data handling, and ethics directly into the lessons.</li>
              <li>Built the authoring tools that let teachers adapt our templates to how they actually teach, or how they think others would like to teach.</li>
            </ul>
          </div>
          <DllGallery />
        </Toggle>
        <Toggle
          meta="Nov 2025 - present"
          title={<>Full Stack Engineer, <em><a href="https://www.pcii-usa.com/" target="_blank" rel="noopener noreferrer">Pacific Coast Industrial Installers</a></em></>}
        >
          <div className="body">Co-developing a $10K-funded mobile app that consolidates contractor verification, insurance, licensing, and safety certifications into a single platform, replacing multi-day back-and-forth with agents and phone calls.</div>
        </Toggle>
        <Toggle
          meta="Aug 2025 - Sep 2026"
          title={<>Center Attendant, <em><a href="https://housing.uci.edu/arroyo-vista/" target="_blank" rel="noopener noreferrer">UCI Arroyo Vista Housing</a></em></>}
        >
          <div className="body">Supported front-facing housing operations handling 100+ resident requests weekly across a large on-campus community.</div>
        </Toggle>
        <h2 className="group-label">Volunteering</h2>
        <Toggle
          meta="May 2026 - present"
          title={<>Executive Board, <em><a href="https://aisafetyuci.org/team" target="_blank" rel="noopener noreferrer">AI Safety Collective @ UCI</a></em></>}
        >
          <div className="body">
            <ul>
              <li>Lead day-to-day operations and the collective&rsquo;s external presence.</li>
              <li>Mentee in the <a href="https://pathfinder.kairos-project.org/" target="_blank" rel="noopener noreferrer">Pathfinder Fellowship</a>.</li>
              <li>Attended OASIS 7.0, a weeklong conference organized by <a href="https://kairos-project.org/" target="_blank" rel="noopener noreferrer">Kairos</a>, alongside other AI safety group organizers at the <a href="https://constellation.org/" target="_blank" rel="noopener noreferrer">Constellation</a> office in Berkeley.</li>
              <li>Attended <a href="https://www.effectivealtruism.org/ea-global" target="_blank" rel="noopener noreferrer">EAGxBerkeley</a>.</li>
            </ul>
          </div>
        </Toggle>
        <Toggle
          meta="Aug 2026 - present"
          title={<>Campus Leader, <em><a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">Notion</a></em></>}
        >
          <div className="body">Help students use Notion to organize coursework, manage projects, and collaborate. I&rsquo;m big on organization, so I want to help others make the most of this tool too!</div>
        </Toggle>
        <Toggle
          id="director-of-housing"
          meta="Oct 2024 - Sep 2025"
          title={<>Director of Housing, <em>Sigma Pi Fraternity</em></>}
        >
          <div className="body">Oversaw housing operations for a 100+ member chapter, managing landlord, realtor, and student-group relationships across multiple properties.</div>
        </Toggle>
        <Toggle
          meta="Oct 2022 - Oct 2024"
          title={<>Project Manager, <em>Project Art Start</em></>}
        >
          <div className="body">Led exhibit-based art lessons and multi-visit programs for elementary students. Plenty of public-speaking practice with a lively audience. Some pictures attached on my <a href="https://www.linkedin.com/in/ivan-shishkin-dev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</div>
        </Toggle>
      </div>
    </SectionLayout>
  );
}
