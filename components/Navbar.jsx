"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Facility", href: "/facility" },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ui-border bg-ui-bg/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Prem Industries" width={140} height={40} />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ui-muted lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ui-text">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-red2"
          >
            Get a Quote
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ui-border text-ui-text lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-ui-border bg-ui-bg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 text-sm text-ui-muted">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-ui-text"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
