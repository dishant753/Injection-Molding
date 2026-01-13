import SectionHeading from "../../../components/SectionHeading";
import ContactForm from "../../../components/ContactForm";
import HeroSection from "../../../components/HeroSection";

export const metadata = {
  title: "Contact | Prem Industries",
  description: "Request a quote or start an RFQ for injection moulding projects.",
  openGraph: {
    title: "Contact | Prem Industries",
    description: "Request a quote or start an RFQ for injection moulding projects.",
    images: ["/images/hero/hero-poster.jpg"]
  }
};

const checklist = [
  "Drawing or 3D model",
  "Annual quantity",
  "Material + color",
  "Insert / overmold requirements",
  "Target tolerance"
];

export default function ContactPage() {
  return (
    <div className="bg-ui-bg">
      <HeroSection
        title="Get a Quote / Contact"
        description="Tell us about your part requirements and we will respond within 24–48 hours."
        videoSrc="/videos/contact.mp4"
        overlayClass="bg-white/80"
      />

      <section className="section-padding">
        <SectionHeading
          eyebrow="RFQ"
          title="Start a request"
          description="Share the essentials so we can quote quickly."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card p-6">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="card space-y-3 p-6 text-sm text-ui-muted">
              <h3 className="text-lg font-semibold text-ui-text">Quick Contact</h3>
              <button className="rounded-full bg-brand-red px-4 py-2 text-xs font-semibold text-white">
                WhatsApp
              </button>
              <p>+91 90000 00000</p>
              <p>sales@premindustries.com</p>
              <p>Plot 12, Industrial Estate, Pune, IN</p>
              <div className="h-40 rounded-lg border border-ui-border bg-ui-s2" />
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ui-text">RFQ Checklist</h3>
              <ul className="mt-3 space-y-2 text-sm text-ui-muted">
                {checklist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
