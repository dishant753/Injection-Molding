import SectionHeading from "../../../components/SectionHeading";
import GalleryGrid from "../../../components/GalleryGrid";
import HeroSection from "../../../components/HeroSection";
import { productFilters, productItems } from "../../../lib/content";

export const metadata = {
  title: "Products | Prem Industries",
  description: "Explore injection molded components across multiple industries.",
  openGraph: {
    title: "Products | Prem Industries",
    description: "Explore injection molded components across multiple industries.",
    images: ["/images/hero/hero-poster.jpg"]
  }
};

export default function ProductsPage() {
  return (
    <div className="bg-ui-bg">
      <HeroSection
        title="Products & Components"
        description="50+ representative parts covering automotive, medical, electronics, and industrial use-cases."
        videoSrc="/videos/products.mp4"
        overlayClass="bg-white/70"
      />

      <section className="section-padding">
        <SectionHeading
          eyebrow="Gallery"
          title="Browse our production-ready portfolio"
          description="Filter by industry and explore common materials, finishes, and part geometries."
        />
        <GalleryGrid items={productItems} filters={productFilters} />
      </section>
    </div>
  );
}
