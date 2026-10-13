import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../images.js";
import SmartImage from "./SmartImage.jsx";

export default function AboutResearch({ full = true }) {
  return (
    <section className="section">
      <div className="container about">
        <SmartImage
          src={IMAGES.farmers}
          alt="Farmers working in a green agricultural field in Rwanda"
          className="about__img"
        />
        <div className="about__text">
          <span className="accent-bar" />
          <h2 className="section__title">About the Research</h2>
          <p>
            Agriculture is essential to Rwanda's food security, employment, and economic growth.
            However, farmers in rwanda face challenges such as irregular rainfall,
            prolonged droughts, soil degradation, poor fertilizer management, and limited adoption
            of modern farming technologies.
          </p>
          {full && (
            <p>
              This research presents an IoT and Machine Learning-based Crop Recommendation System for
              sustainable agriculture. It explores the use of real-time soil and environmental data,
              cloud-based analysis, and a Random Forest machine learning model to recommend suitable
              crops. The initiative also incorporates AgriScan-AI, a mobile application that helps
              farmers identify crop leaf diseases from images and access practical treatment and
              prevention guidance.
            </p>
          )}
          <p>
            The overall goal is to support informed farming decisions, improve resource utilization,
            and promote sustainable, climate-resilient agriculture.
          </p>
          {!full && (
            <Link to="/about" className="btn btn--green">
              Learn More <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
