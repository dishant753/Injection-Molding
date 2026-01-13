import Link from "next/link";

export function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-red2"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-ui-border px-6 py-3 text-sm font-semibold text-ui-text transition hover:border-brand-navy2 hover:shadow-glow"
    >
      {children}
    </Link>
  );
}
