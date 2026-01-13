import SectionHeading from "../../../components/SectionHeading";
import { PrimaryButton } from "../../../components/Buttons";
import TimelineProcess from "../../../components/TimelineProcess";
import AnimatedCard from "../../../components/AnimatedCard";
import HeroSection from "../../../components/HeroSection";

export const metadata = {
  title: "Capabilities | Prem Industries",
  description: "Tooling, molding, insert molding, and secondary operations for precision injection moulding.",
  openGraph: {
    title: "Capabilities | Prem Industries",
    description:
      "Tooling, molding, insert molding, and secondary operations for precision injection moulding.",
    images: ["/images/hero/hero-poster.jpg"]
  }
};

const capabilitySections = [
  {
    title: "Tooling & DFM Support",
    description:
      "Collaborative design reviews, mold flow analysis, and rapid tool builds to reduce cycle time."
  },
  {
    title: "Injection Molding Production",
    description:
      "Multi-cavity tooling, tight process control, and scalable press capacity for repeatable output."
  },
  {
    title: "Insert Molding / Overmolding",
    description:
      "Mechanical and electrical insert integration for higher-function assemblies."
  },
  {
    title: "Secondary Ops",
    description: "Welding, printing, assembly, and packaging with in-line inspections."
  },
  {
    title: "Packaging & Dispatch",
    description: "Custom kitting, labeling, and inventory-ready dispatch."
  }
];

const materials = ["ABS", "PP", "PC", "Nylon", "POM", "TPE", "HDPE", "PA6", "PA66", "PET"];

export default function CapabilitiesPage() {
  return (
    <div className="bg-ui-bg">
      <HeroSection
        title="Capabilities"
        description="Precision tooling, high-volume molding, and secondary operations built for scale."
        videoSrc="/videos/capabilities.mp4"
        overlayClass="bg-white/75"
      />

      <section className="section-padding">
        <div className="grid gap-6 lg:grid-cols-2">
          {capabilitySections.map((section) => (
            <AnimatedCard key={section.title} title={section.title} description={section.description} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-ui-s2">
        <SectionHeading
          eyebrow="How it works"
          title="A disciplined molding cycle"
          description="Our process is engineered for repeatability with tight controls on every shot."
        />
        <TimelineProcess />
      </section>

      <section className="section-padding">
        <SectionHeading
          eyebrow="Materials"
          title="Resin expertise"
          description="We support a broad range of engineering polymers and custom blends."
        />
        <div className="flex flex-wrap gap-3">
          {materials.map((material) => (
            <span
              key={material}
              className="rounded-full border border-ui-border bg-ui-s1 px-4 py-2 text-xs font-semibold text-ui-muted"
            >
              {material}
            </span>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="card flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ui-text">Request a manufacturing review</h2>
            <p className="mt-2 text-sm text-ui-muted">
              Upload your drawings and get feedback on design for manufacturability.
            </p>
          </div>
          <PrimaryButton href="/contact">Request review</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
