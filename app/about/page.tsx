import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import Hobbies from "@/components/Hobbies";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me.",
};

export default function AboutPage() {
  return (
    <SectionLayout slug="about">
      <p>How hard is it to convey a whole human in a few paragraphs. With time and with life I&apos;ll be able to box myself in better, but at this point it&apos;s tough. As with all things, that doesn&apos;t mean I won&apos;t try.</p>
      <p>Originally I&apos;m from Russia. I immigrated here with my mother and sister, and we moved around a lot in our time (shoutout Inland Empire). At the moment, I&apos;m in Irvine.</p>
      <p>Ever since I was little I&apos;ve enjoyed technical things. I always considered myself a &ldquo;math guy,&rdquo; in the way elementary schoolers use the term. Other words people tend to use for people like me: analytical, pragmatic, methodical, empirical. Growing up, my conditions rewarded resilience over comfort, which made me someone who acts on life rather than reacts to it.</p>
      <p>In recent life, or better said, just college, that technical streak pushed me toward computer science and everything orbiting it. That said, I never want my learning fenced in by the confines of my major. This sometimes hurts me since I&apos;ve yet to find a niche, but until I do, I&apos;m content being a jack of all trades.</p>
      <p>Below is a list of hobbies. Maybe that&apos;ll help ya understand me better.</p>

      <Hobbies />
    </SectionLayout>
  );
}
