export default function HeroSection({
  title,
  description,
  videoSrc,
  poster = "/images/hero/hero-poster.jpg",
  overlayClass = "bg-white/75",
  children
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${overlayClass}`} />
      </div>
      <div className="relative mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center gap-10 px-6 py-24">
        {children ?? (
          <div>
            <h1 className="text-4xl font-semibold text-ui-text md:text-5xl">{title}</h1>
            <p className="mt-3 max-w-2xl text-sm text-ui-muted">{description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
