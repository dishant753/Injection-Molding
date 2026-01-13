import SectionHeading from "../../../components/SectionHeading";
import { PrimaryButton } from "../../../components/Buttons";
import HeroSection from "../../../components/HeroSection";

export const metadata = {
  title: "Quality | Prem Industries",
  description: "Quality systems, inspection, and compliance for injection moulding programs.",
  openGraph: {
    title: "Quality | Prem Industries",
    description: "Quality systems, inspection, and compliance for injection moulding programs.",
    images: ["/images/hero/hero-poster.jpg"]
  }
};

const qcCards = [
  "Incoming inspection",
  "In-process checks",
  "Dimensional inspection",
  "Traceability",
  "Final inspection + packing checks"
];

export default function QualityPage() {
  return (
    <div className="bg-ui-bg">
      <HeroSection
        title="Quality That Scales"
        description="Inspection, traceability, and disciplined SOPs across every production stage."
        videoSrc="/videos/quality.mp4"
        overlayClass="bg-white/75"
      />

      <section className="section-padding">
        <SectionHeading
          eyebrow="Certifications"
          title="Compliance-ready documentation"
          description="Certifications are available on request or when applicable to your industry."
        />
        <div className="flex flex-wrap gap-4">
          {["ISO 9001", "IATF 16949", "ISO 13485"].map((cert) => (
            <span
              key={cert}
              className="rounded-full border border-ui-border bg-ui-s1 px-4 py-2 text-xs text-ui-muted"
            >
              {cert} (available on request)
            </span>
          ))}
        </div>
      </section>

      <section className="section-padding bg-ui-s2">
        <SectionHeading
          eyebrow="QC capabilities"
          title="In-line inspections for every batch"
          description="Documented process control and traceability to meet stringent quality expectations."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {qcCards.map((card) => (
            <div key={card} className="card p-6 text-sm text-ui-muted">
              {card}
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ui-text">Process & Compliance</h3>
            <ul className="mt-3 space-y-2 text-sm text-ui-muted">
              <li>Documented SOPs and training records</li>
              <li>Batch records (if applicable)</li>
              <li>Sampling plans and inspection logs</li>
            </ul>
          </div>
          <div className="card flex flex-col justify-between gap-4 p-6">
            <div>
              <h3 className="text-lg font-semibold text-ui-text">Request quality documents</h3>
              <p className="mt-2 text-sm text-ui-muted">
                Get audit-ready documentation, inspection reports, and compliance details.
              </p>
            </div>
            <PrimaryButton href="/contact">Request documents</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
