import { Link } from "react-router-dom";
import { BrainCircuit, Cloud, Smartphone, Sprout } from "lucide-react";

const TECHS = [
  {
    icon: Sprout,
    color: "green",
    title: "IoT Sensors",
    text: "Collect real-time soil moisture, temperature, humidity, pH and NPK data from the field.",
  },
  {
    icon: BrainCircuit,
    color: "blue",
    title: "Machine Learning",
    text: "A Random Forest model analyzes the data and predicts suitable crops and fertilizers.",
  },
  {
    icon: Smartphone,
    color: "green",
    title: "Mobile Application",
    text: "AgriScan-AI detects plant diseases from leaf photos and provides guidance.",
  },
  {
    icon: Cloud,
    color: "purple",
    title: "Cloud Platform",
    text: "Stores data, runs analytics and delivers insights to farmers.",
  },
];

export default function Technologies({ more = false }) {
  return (
    <section className="section section--tint section--tight">
      <div className="container">
        <h2 className="section__title section__title--center">Key Technologies</h2>
        <div className="tech">
          {TECHS.map(({ icon: Icon, color, title, text }) => (
            <article key={title} className="tech__item">
              <span className={`icon-circle icon-circle--${color}`} aria-hidden="true">
                <Icon size={30} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        {more && (
          <p className="center-link">
            <Link to="/technology" className="btn btn--green">Explore our technology</Link>
          </p>
        )}
      </div>
    </section>
  );
}
