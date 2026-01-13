import SectionHeading from "../../../components/SectionHeading";
import StatCard from "../../../components/StatCard";
import ParallaxMedia from "../../../components/ParallaxMedia";
import { PrimaryButton } from "../../../components/Buttons";
import HeroSection from "../../../components/HeroSection";
import { facilityImages } from "../../../lib/content";

export const metadata = {
  title: "Facility | Prem Industries",
  description: "High-capacity injection moulding facility and machine park.",
  openGraph: {
    title: "Facility | Prem Industries",
    description: "High-capacity injection moulding facility and machine park.",
    images: ["/images/hero/hero-poster.jpg"]
  }
};

const flowSteps = ["Raw", "Molding", "QC", "Assembly", "Packing", "Dispatch"];

export default function FacilityPage() {
  return (
    <div className="bg-ui-bg">
      <HeroSection
        title="Facility & Machine Park"
        description="High-tonnage presses, integrated tool room, and dedicated QC lab."
        videoSrc="/videos/facility.mp4"
        overlayClass="bg-white/70"
      />

      <section className="section-padding">
        <SectionHeading
          eyebrow="Capacity"
          title="Built for volume"
          description="Placeholder stats shown until confirmed for your facility."
        />
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard value={45} label="Presses" />
          <StatCard value={800} label="Ton Range" />
          <StatCard value={3} label="Shifts" />
          <StatCard value={100} label="Floor Area (K+ sq.ft)" />
        </div>
      </section>

      <section className="section-padding bg-ui-s2">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside the facility"
          description="Shopfloor, tooling, QC, and packing lines."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilityImages.map((image) => (
            <ParallaxMedia key={image} src={image} alt="Facility" />
          ))}
        </div>
      </section>

      <section className="section-padding">
        <SectionHeading
          eyebrow="Process Flow"
          title="Streamlined movement from resin to dispatch"
          description="Clear handoffs and inspection gates across every production step."
        />
        <div className="flex flex-wrap gap-3">
          {flowSteps.map((step) => (
            <span
              key={step}
              className="rounded-full border border-ui-border bg-ui-s1 px-4 py-2 text-xs font-semibold text-ui-muted"
            >
              {step}
            </span>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="card flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ui-text">Schedule a visit</h2>
            <p className="mt-2 text-sm text-ui-muted">
              Walk through our press lines, tool room, and QC lab with our engineering team.
            </p>
          </div>
          <PrimaryButton href="/contact">Schedule visit</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
