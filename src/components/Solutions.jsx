import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Smartphone, Sprout } from "lucide-react";
import { IMAGES } from "../images.js";
import SmartImage from "./SmartImage.jsx";

const SOLUTIONS = [
  {
    id: "iot",
    to: "/technology",
    icon: Sprout,
    image: IMAGES.iot,
    alt: "Young maize plants growing in a field where an IoT soil sensor is installed",
    title: "IoT Crop Recommendation System",
    text: "Real-time collection of soil and environmental data for smart crop selection and fertilizer management.",
    points: [
      "Soil moisture and temperature monitoring",
      "Humidity and pH measurement",
      "Soil nutrient analysis (NPK)",
      "Machine learning-based crop recommendations",
      "Support for fertilizer management",
    ],
  },
  {
    id: "agriscan",
    to: "/agriscan",
    icon: Smartphone,
    image: IMAGES.phone,
    alt: "Smartphone surrounded by green leaves, representing the AgriScan-AI mobile app",
    title: "AgriScan-AI Mobile Application",
    text: "A mobile app that uses deep learning to detect crop leaf diseases. Just snap or upload a photo and get instant results with guidance.",
    points: [
      "Capture or upload a crop leaf photo",
      "Detect potential leaf diseases using deep learning",
      "Explain disease causes and symptoms",
      "Recommend organic and chemical treatment options",
      "Disease prevention guidance and links to treatment products",
    ],
  },
];

// `only` = "iot" | "agriscan" shows a single card. Default shows both.
export default function Solutions({ only, title = true, note = true, links = true }) {
  const items = only ? SOLUTIONS.filter((s) => s.id === only) : SOLUTIONS;
  return (
    <section className="section section--tint">
      <div className="container">
        {title && (
          <>
            <span className="accent-bar" />
            <h2 className="section__title">One Project. Two Intelligent Solutions.</h2>
          </>
        )}

        <div className={`solutions ${only ? "solutions--single" : ""}`}>
          {items.map(({ id, to, icon: Icon, image, alt, title: t, text, points }) => (
            <article key={id} className="solution">
              <SmartImage src={image} alt={alt} className="solution__img" />
              <div className="solution__body">
                <span className="icon-circle icon-circle--green icon-circle--sm" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3>{t}</h3>
                <p>{text}</p>
                <ul className="checklist">
                  {points.map((p) => (
                    <li key={p}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {links && (
                  <Link to={to} className="solution__link">
                    Learn more <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {note && (
          <p className="solutions__note">
            <strong>How they work together:</strong> AgriScan-AI complements the crop recommendation
            system by helping farmers respond when their plants develop diseases.
          </p>
        )}
      </div>
    </section>
  );
}
