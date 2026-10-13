import { Camera, ScanLine, ShieldCheck, Stethoscope } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Solutions from "../components/Solutions.jsx";

const STEPS = [
  { icon: Camera, title: "Capture", text: "Take a photo of the affected leaf, or upload one from your gallery." },
  { icon: ScanLine, title: "Detect", text: "Deep learning checks the image for likely leaf diseases." },
  { icon: Stethoscope, title: "Understand", text: "See the cause and symptoms, with organic and chemical treatment options." },
  { icon: ShieldCheck, title: "Prevent", text: "Get prevention guidance and links to relevant treatment products." },
];

export default function AgriScanPage() {
  return (
    <>
      <PageHeader
        icon={ScanLine}
        title="AgriScan-AI"
        subtitle="Identify crop leaf diseases from a photo and know what to do next."
      />
      <Solutions only="agriscan" title={false} links={false} />
      <section className="section">
        <div className="container">
          <span className="accent-bar" />
          <h2 className="section__title">How AgriScan-AI works</h2>
          <div className="steps">
            {STEPS.map(({ icon: Icon, title, text }) => (
              <article key={title} className="step">
                <span className="icon-circle icon-circle--green icon-circle--sm" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
