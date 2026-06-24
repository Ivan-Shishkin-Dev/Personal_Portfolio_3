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
      <p>Ever since I was a little kid in Russia I&apos;ve enjoyed technical things. I always considered myself a &ldquo;math guy,&rdquo; in the way elementary schoolers use the term. Other words people tend to use for people like me: analytical, pragmatic, methodical, empirical. Growing up, my conditions rewarded resilience over comfort, which made me someone who acts on life rather than reacts to it.</p>
      <p>In college, that technical streak pushed me toward computer science and everything orbiting it. That said, I never want my learning fenced in by the confines of my major. Here are some things I spend my time on, in case they fill in the picture. This isn&apos;t all that I do, talk to me to find out more!</p>

      <Hobbies />
    </SectionLayout>
  );
}
