import { Link, useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { IMAGES } from "../images.js";
import SmartImage from "./SmartImage.jsx";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <SmartImage src={IMAGES.hero} alt="Green hills and crop rows in rural Rwanda" className="hero__bg" eager />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="hero__eyebrow">SMART FARMING · SUSTAINABLE FUTURE</p>
        <h1 className="hero__title">
          Smarter Farming Through <span>AI and IoT</span>
        </h1>
        <p className="hero__text">
          An intelligent crop recommendation and disease detection approach supporting sustainable
          agriculture in Rwanda.
        </p>
        <div className="hero__buttons">
          <button type="button" className="btn btn--light" onClick={() => navigate("/demo", { state: { autoplay: true } })}>
            <span className="btn__play"><Play size={12} fill="currentColor" /></span>
            Watch Demo
          </button>
          <Link to="/about" className="btn btn--outline">Explore Research</Link>
        </div>
      </div>
    </section>
  );
}
