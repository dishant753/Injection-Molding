import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "News", href: "#news" }
];

export default function Footer() {
  return (
    <footer className="border-t border-ui-border bg-ui-s1">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Image src="/logo.png" alt="MecaMold" width={160} height={48} />
          <p className="text-sm text-ui-muted">
            Precision injection moulding, tooling, and assembly support for high-volume programs that
            demand repeatable quality.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ui-text">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-ui-muted">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-ui-text">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 text-sm text-ui-muted">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ui-text">Contact</h4>
          <p>MecaMold Industries, Plot 12, Industrial Estate, Pune, IN</p>
          <p>+91 90000 00000</p>
          <p>hello@mecamold.com</p>
          <div className="flex gap-3">
            <span className="rounded-full border border-ui-border px-3 py-1">LinkedIn</span>
            <span className="rounded-full border border-ui-border px-3 py-1">YouTube</span>
            <span className="rounded-full border border-ui-border px-3 py-1">X</span>
          </div>
        </div>
      </div>
      <div className="border-t border-ui-border py-4 text-center text-xs text-ui-muted">
        © 2024 MecaMold Industries. All rights reserved.
      </div>
    </footer>
  );
}
