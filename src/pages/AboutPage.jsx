import { Info } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import AboutResearch from "../components/AboutResearch.jsx";
import ResearchImpact from "../components/ResearchImpact.jsx";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        icon={Info}
        title="About"
        subtitle="The research behind Eza Agri-System in Kayonza District, Rwanda."
      />
      <AboutResearch />
      <ResearchImpact />
    </>
  );
}
