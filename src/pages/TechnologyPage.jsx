import { Cpu } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Technologies from "../components/Technologies.jsx";
import Solutions from "../components/Solutions.jsx";

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        icon={Cpu}
        title="Our Technology"
        subtitle="Sensors, machine learning, a mobile app and the cloud working together."
      />
      <Technologies />
      <Solutions only="iot" title={false} note={false} links={false} />
    </>
  );
}
