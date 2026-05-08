import type { SparkCard } from "@/content/sparks";

export default function Sparkline({ card }: { card: SparkCard }) {
  return (
    <svg viewBox="0 0 160 36" preserveAspectRatio="none" aria-hidden="true">
      <path d={card.fillD} fill="var(--accent)" opacity="0.08" />
      <path
        d={card.pathD}
        fill="none"
        stroke="var(--ink)"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.85}
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={card.endX} cy={card.endY} r="2.2" fill="var(--accent)" />
    </svg>
  );
}
