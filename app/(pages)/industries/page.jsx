import Image from "next/image";
import { PrimaryButton } from "../../../components/Buttons";
import HeroSection from "../../../components/HeroSection";

export const metadata = {
  title: "Industries | Prem Industries",
  description: "Automotive, medical, electronics, and industrial injection molding expertise.",
  openGraph: {
    title: "Industries | Prem Industries",
    description: "Automotive, medical, electronics, and industrial injection molding expertise.",
    images: ["/images/hero/hero-poster.jpg"]
  }
};

const industryBlocks = [
  {
    title: "Automotive",
    bullets: ["Clips, housings, brackets", "Heat-resistant materials", "PPAP-ready documentation"],
    image: "/images/industries/automotive.jpg"
  },
  {
    title: "Medical",
    bullets: ["Device housings", "Lab consumables", "Clean handling protocols"],
    image: "/images/industries/medical.jpg"
  },
  {
    title: "Electronics",
    bullets: ["Enclosures and connectors", "ESD-safe materials", "Precision tolerances"],
    image: "/images/industries/electronics.jpg"
  },
  {
    title: "Packaging",
    bullets: ["Caps and closures", "High-speed cavity tools", "Color management"],
    image: "/images/industries/packaging.jpg"
  },
  {
    title: "Consumer",
    bullets: ["Handles, knobs, accessories", "Surface finish control", "Assembly-ready parts"],
    image: "/images/industries/consumer.jpg"
  },
  {
    title: "Industrial",
    bullets: ["Functional parts", "Tough resins", "Multi-shift capacity"],
    image: "/images/industries/industrial.jpg"
  }
];

export default function IndustriesPage() {
  return (
    <div className="bg-ui-bg">
      <HeroSection
        title="Industries We Support"
        description="Programs tailored for regulatory, performance, and high-volume manufacturing demands."
        videoSrc="/videos/industries.mp4"
        overlayClass="bg-white/70"
      />

      <section className="section-padding">
        <div className="space-y-8">
          {industryBlocks.map((industry, index) => (
            <div
              key={industry.title}
              className={`grid gap-6 lg:grid-cols-[1fr_1.2fr] ${
                index % 2 === 1 ? "lg:grid-cols-[1.2fr_1fr]" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-56 overflow-hidden rounded-xl border border-ui-border">
                  <Image src={industry.image} alt={industry.title} fill className="object-cover" />
                </div>
              </div>
              <div className="card flex flex-col justify-center gap-3 p-6">
                <h3 className="text-xl font-semibold text-ui-text">{industry.title}</h3>
                <ul className="space-y-2 text-sm text-ui-muted">
                  {industry.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="card flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ui-text">Tell us your requirement</h2>
            <p className="mt-2 text-sm text-ui-muted">
              Share your industry, compliance needs, and production goals.
            </p>
          </div>
          <PrimaryButton href="/contact">Start conversation</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
