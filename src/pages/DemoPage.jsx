import { CirclePlay } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import VideoDemo from "../components/VideoDemo.jsx";

export default function DemoPage() {
  return (
    <>
      <PageHeader icon={CirclePlay} title="Demo" subtitle="A walkthrough of the complete system." />
      <VideoDemo />
    </>
  );
}
