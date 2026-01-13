export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";
  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
          <span className="h-1 w-6 rounded-full bg-brand-red" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-ui-text md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-ui-muted">{description}</p> : null}
    </div>
  );
}
