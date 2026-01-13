"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PrimaryButton } from "./Buttons";

const focusableSelector =
  "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

export default function LightboxModal({ item, onClose }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setIndex((prev) => (prev + 1) % item.images.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
      }
      if (event.key === "Tab") {
        const focusable = containerRef.current?.querySelectorAll(focusableSelector);
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [item.images.length, onClose]);

  useEffect(() => {
    const focusTarget = containerRef.current?.querySelector("button");
    focusTarget?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} details`}
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl rounded-2xl bg-ui-s1 p-6 shadow-soft"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-ui-border px-3 py-1 text-sm"
        >
          Close
        </button>
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="relative h-72 overflow-hidden rounded-xl border border-ui-border">
              <Image src={item.images[index]} alt={item.title} fill className="object-cover" />
            </div>
            <div className="flex gap-3">
              {item.images.map((image, imageIndex) => (
                <button
                  key={image}
                  onClick={() => setIndex(imageIndex)}
                  className={`relative h-16 w-20 overflow-hidden rounded-lg border ${
                    index === imageIndex ? "border-brand-red" : "border-ui-border"
                  }`}
                >
                  <Image src={image} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-ui-text">{item.title}</h3>
            <ul className="space-y-2 text-sm text-ui-muted">
              <li>Material: {item.material}</li>
              <li>Finish: {item.finish}</li>
              <li>Industry: {item.category}</li>
            </ul>
            <PrimaryButton href="/contact">Request similar part</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
