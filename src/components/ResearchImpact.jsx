import { CheckCircle2, Leaf, Quote } from "lucide-react";
import { IMAGES } from "../images.js";
import SmartImage from "./SmartImage.jsx";

const OBJECTIVES = [
  "Improve crop selection and agricultural productivity",
  "Support efficient fertilizer and water management",
  "Reduce unnecessary resource wastage",
  "Support early identification of crop diseases",
  "Promote sustainable and climate-resilient agriculture",
];

export default function ResearchImpact() {
  return (
    <section className="section">
      <div className="container impact">
        <div className="impact__list">
          <span className="accent-bar" />
          <h2 className="section__title">Research Objectives &amp; Impact</h2>
          <ul className="checklist checklist--solid">
            {OBJECTIVES.map((o) => (
              <li key={o}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <SmartImage
          src={IMAGES.landscape}
          alt="Rows of healthy crops across a rural agricultural landscape"
          className="impact__img"
        />

        <blockquote className="quote">
          <Quote size={22} className="quote__mark" aria-hidden="true" />
          <p>
            Smart agriculture is not just a technology; it is a step towards a food secure and
            sustainable future for Rwanda.
          </p>
          <Leaf size={20} className="quote__leaf" aria-hidden="true" />
        </blockquote>
      </div>
    </section>
  );
}
