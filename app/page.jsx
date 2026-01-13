import Image from "next/image";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import ParallaxMedia from "../components/ParallaxMedia";
import HeroIntro from "../components/HeroIntro";
import HeroSection from "../components/HeroSection";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { capabilityCards, facilityImages, industries, productItems } from "../lib/content";

const capabilityIcons = [
  <svg key="tooling" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
    <path d="M12 3v4M4 7h16M7 7v6a5 5 0 0 0 10 0V7" strokeWidth="1.5" />
  </svg>,
  <svg key="multi" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
    <rect x="4" y="4" width="7" height="7" strokeWidth="1.5" />
    <rect x="13" y="13" width="7" height="7" strokeWidth="1.5" />
  </svg>,
  <svg key="insert" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
    <circle cx="8" cy="12" r="3" strokeWidth="1.5" />
    <circle cx="16" cy="12" r="3" strokeWidth="1.5" />
    <path d="M11 12h2" strokeWidth="1.5" />
  </svg>,
  <svg key="assembly" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
    <path d="M4 16l4-8 4 8 4-8 4 8" strokeWidth="1.5" />
  </svg>
];

const industryIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
    <path d="M12 8v8M8 12h8" strokeWidth="1.5" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="bg-ui-bg">
      <HeroSection
        videoSrc="/videos/hero.mp4"
        overlayClass="bg-gradient-to-r from-white/80 via-white/60 to-white/20"
      >
        <HeroIntro />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { value: 45, label: "Presses" },
            { value: 800, label: "Ton Range" },
            { value: 8, label: "Parts / Month (M+)" },
            { value: 100, label: "Sq.ft Facility (K+)" }
          ].map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </HeroSection>

      <section className="section-padding">
        <SectionHeading
          eyebrow="Capabilities"
          title="End-to-end manufacturing solutions"
          description="Engineering support, high-volume production, and scalable secondary operations in one integrated facility."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilityCards.map((capability, index) => (
            <FeatureCard
              key={capability.title}
              title={capability.title}
              description={capability.description}
              icon={capabilityIcons[index]}
            />
          ))}
        </div>
      </section>

      <section className="section-padding bg-ui-s2">
        <SectionHeading
          eyebrow="Products"
          title="Representative molded components"
          description="A snapshot of parts we produce across automotive, medical, and industrial programs."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productItems.slice(0, 12).map((item) => (
            <div key={item.id} className="card overflow-hidden transition hover:shadow-glow">
              <div className="relative h-40">
                <Image src={item.images[0]} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ui-text">{item.title}</h3>
                <p className="text-xs text-ui-muted">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <SecondaryButton href="/products">View All Products</SecondaryButton>
        </div>
      </section>

      <section className="section-padding">
        <SectionHeading
          eyebrow="Industries"
          title="Proven across critical industries"
          description="Designing for performance, compliance, and scale in demanding markets."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry} className="card flex items-center gap-3 p-5">
              <span className="text-brand-navy">{industryIcon}</span>
              <span className="text-sm font-semibold text-ui-text">{industry}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-ui-s2">
        <SectionHeading
          eyebrow="Quality"
          title="Built-in quality systems"
          description="Inspection, traceability, and disciplined process control for every production run."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="card p-6">
            <div className="flex flex-wrap gap-3">
              {["ISO 9001", "IATF 16949", "ISO 13485"].map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-ui-border px-4 py-2 text-xs text-ui-muted"
                >
                  {cert} (available on request)
                </span>
              ))}
            </div>
          </div>
          <ul className="card space-y-3 p-6 text-sm text-ui-muted">
            <li>Incoming inspection + resin validation</li>
            <li>In-process checks with SPC tracking</li>
            <li>Dimensional and visual inspection protocols</li>
            <li>Final inspection + packing verification</li>
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <SectionHeading
          eyebrow="Facility"
          title="A high-capacity, controlled environment"
          description="Modern press lines, tool room, and QC lab built for fast turnarounds."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilityImages.map((image, index) => (
            <ParallaxMedia key={image} src={image} alt={`Facility ${index + 1}`} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <SecondaryButton href="/facility">Take a virtual tour</SecondaryButton>
        </div>
      </section>

      <section className="section-padding">
        <div className="card relative overflow-hidden px-8 py-12 text-center">
          <div className="noise" />
          <h2 className="text-2xl font-semibold text-ui-text">
            Share your drawing — get a quote in 24–48 hours
          </h2>
          <p className="mt-2 text-sm text-ui-muted">
            Our engineers review your design and suggest manufacturable optimizations.
          </p>
          <div className="mt-6 flex justify-center">
            <PrimaryButton href="/contact">Start an RFQ</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
