import SectionHeading from "../../../components/SectionHeading";
import VideoCard from "../../../components/VideoCard";
import HeroSection from "../../../components/HeroSection";

export const metadata = {
  title: "Videos | Prem Industries",
  description: "See the production floor, tooling, QC, and packing in action.",
  openGraph: {
    title: "Videos | Prem Industries",
    description: "See the production floor, tooling, QC, and packing in action.",
    images: ["/images/hero/hero-poster.jpg"]
  }
};

const videos = [
  {
    title: "Factory Overview",
    description: "Full facility walk-through covering press lines and tooling.",
    duration: "2:30",
    poster: "/images/hero/video-1.jpg"
  },
  {
    title: "Molding Cycle Close-ups",
    description: "Clamp, inject, cool, and eject with precise cycle control.",
    duration: "1:45",
    poster: "/images/hero/video-2.jpg"
  },
  {
    title: "Tool Room & Changeover",
    description: "Dedicated tool maintenance and fast changeovers.",
    duration: "2:05",
    poster: "/images/hero/video-3.jpg"
  },
  {
    title: "QC Inspection",
    description: "Dimensional inspection and gauge checks on every batch.",
    duration: "1:20",
    poster: "/images/hero/video-4.jpg"
  },
  {
    title: "Packing & Dispatch",
    description: "Final inspection, kitting, and dispatch readiness.",
    duration: "1:10",
    poster: "/images/hero/video-5.jpg"
  }
];

export default function VideosPage() {
  return (
    <div className="bg-ui-bg">
      <HeroSection
        title="Inside the Production Floor"
        description="Short clips that prove capability, cleanliness, and discipline on the shopfloor."
        videoSrc="/videos/floor.mp4"
        overlayClass="bg-white/75"
      />

      <section className="section-padding">
        <SectionHeading
          eyebrow="Video Library"
          title="See the process in motion"
          description="All videos load metadata only for performance."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </section>
    </div>
  );
}
