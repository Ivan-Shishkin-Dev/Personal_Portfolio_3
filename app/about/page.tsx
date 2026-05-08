import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";

export const metadata: Metadata = {
  title: "About",
  description: "Background, where I come from, what I'm chasing.",
};

export default function AboutPage() {
  return (
    <SectionLayout slug="about">
      <p>I'm a computer-science student at the University of California, Irvine, drawn to the question of how we get powerful systems to do what we actually want them to do — not just what we asked them to do.</p>
      <p>Before college I spent most of my time taking things apart. Old laptops, scripts, my parents' patience. I found my way into machine learning the slow way: writing toy classifiers in Python, breaking them, trying to figure out why their failures looked the way they did.</p>
      <p>These days I'm interested in <em>safe systems</em> — interpretability, evaluation, the parts of a model you can actually inspect — and in the boring infrastructure that makes a system trustworthy: tests, traces, the discipline of writing things down.</p>
      <p>Outside of that, I read more than I should, run when the marine layer lifts, and keep a long list of half-finished side projects.</p>
    </SectionLayout>
  );
}
