import Image from "next/image";

export default function VideoCard({ title, description, duration, poster }) {
  return (
    <div className="card overflow-hidden">
      <div className="relative h-48">
        <Image src={poster} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-white">
          <span className="rounded-full bg-white/20 px-2 py-1">{duration}</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-brand-red/90 text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path d="M8 5l11 7-11 7z" strokeWidth="1.5" />
            </svg>
          </span>
        </div>
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold text-ui-text">{title}</h3>
        <p className="text-sm text-ui-muted">{description}</p>
      </div>
    </div>
  );
}
