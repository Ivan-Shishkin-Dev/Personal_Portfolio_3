import { sparks } from "@/content/sparks";
import Sparkline from "./Sparkline";

export default function Sparks() {
  return (
    <section className="sparks" aria-label="Recent activity">
      {sparks.map((c) => (
        <div key={c.label} className="spark">
          <div className="label">{c.label}</div>
          <Sparkline card={c} />
          <div className="row">
            <span className="stat">{c.stat}</span>
            <span className="period">{c.period}</span>
          </div>
          <div className="sub">{c.sub}</div>
        </div>
      ))}
    </section>
  );
}
