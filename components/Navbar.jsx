"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "News", href: "#news" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 bg-ui-bg">
      <div className="hidden border-b border-ui-border bg-ui-s2 text-xs text-ui-muted lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span>Industrial Estate, Pune, IN</span>
            <span>hello@mecamold.com</span>
            <span>+91 90000 00000</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="font-semibold text-ui-text">
              Sign Up
            </Link>
            <div className="flex items-center gap-2 text-ui-text">
              <span className="h-8 w-8 rounded-full border border-ui-border text-center leading-8">
                in
              </span>
              <span className="h-8 w-8 rounded-full border border-ui-border text-center leading-8">
                yt
              </span>
              <span className="h-8 w-8 rounded-full border border-ui-border text-center leading-8">
                x
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-ui-border bg-ui-bg/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="MecaMold" width={140} height={40} />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-ui-muted lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-ui-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="#quote"
              className="rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-red2"
            >
              Book Inspection
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
      </div>
      {open ? (
        <div className="border-b border-ui-border bg-ui-bg lg:hidden">
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
