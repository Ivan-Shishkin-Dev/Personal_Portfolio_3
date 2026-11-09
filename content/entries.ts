import { projects, projectId } from "./projects";

// Toggle ids per section, in page order. The terminal lists them as files under each
// section, so the ids passed to <Toggle> on /experience and /education have to match.
export const entries: Record<string, string[]> = {
  experience: [
    "digital-learning-lab",
    "pacific-coast-installers",
    "arroyo-vista",
    "ai-safety-collective",
    "notion",
    "director-of-housing",
    "project-art-start",
  ],
  projects: projects.map(projectId),
  education: ["uc-irvine", "sigma-pi", "mentorship", "bluedot"],
};
