import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Solutions from "../components/Solutions.jsx";
import AboutResearch from "../components/AboutResearch.jsx";
import Technologies from "../components/Technologies.jsx";
import ResearchImpact from "../components/ResearchImpact.jsx";
import { CirclePlay } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <AboutResearch full={false} />
      <Technologies more />
      <ResearchImpact />
      <section className="section section--tint section--tight">
        <div className="container cta">
          <div>
            <h2 className="section__title">See the system in action</h2>
            <p>A short video shows how sensor data becomes crop advice and disease guidance.</p>
          </div>
          <Link to="/demo" className="btn btn--green">
            <CirclePlay size={18} /> Go to the demo
          </Link>
        </div>
      </section>
    </>
  );
}
