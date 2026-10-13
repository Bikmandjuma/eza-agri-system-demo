import { Leaf, Linkedin, Mail, Youtube } from "lucide-react";
import {
  CONTACT_EMAIL,
  LINKEDIN_URL,
  LOCATION,
  PROJECT_NAME,
  PROJECT_TAGLINE,
  YOUTUBE_CHANNEL_URL,
} from "../config.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="brand brand--light">
          <span className="brand__logo" aria-hidden="true">
            <Leaf size={22} strokeWidth={2.2} />
          </span>
          <span className="brand__text">
            <strong>{PROJECT_NAME}</strong>
          </span>
        </div>

        <p className="footer__meta">
          {LOCATION} <span aria-hidden="true">|</span> {PROJECT_TAGLINE}
        </p>

        <div className="footer__social">
          {YOUTUBE_CHANNEL_URL && (
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube channel">
              <Youtube size={24} />
            </a>
          )}
          {!YOUTUBE_CHANNEL_URL && (
            <span className="footer__icon" aria-hidden="true"><Youtube size={24} /></span>
          )}
          {LINKEDIN_URL ? (
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
          ) : (
            <span className="footer__icon" aria-hidden="true"><Linkedin size={22} /></span>
          )}
          <a href={`mailto:${CONTACT_EMAIL}`} aria-label={`Email ${CONTACT_EMAIL}`}>
            <Mail size={24} />
          </a>
        </div>
      </div>
      <p className="footer__email">
        Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </footer>
  );
}
