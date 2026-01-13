"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-lg border border-ui-border px-4 py-3"
          placeholder="Name"
          aria-label="Name"
          required
        />
        <input
          className="rounded-lg border border-ui-border px-4 py-3"
          placeholder="Company"
          aria-label="Company"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-lg border border-ui-border px-4 py-3"
          placeholder="Email"
          type="email"
          aria-label="Email"
          required
        />
        <input
          className="rounded-lg border border-ui-border px-4 py-3"
          placeholder="Phone"
          aria-label="Phone"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <select className="rounded-lg border border-ui-border px-4 py-3" aria-label="Industry">
          <option>Industry</option>
          <option>Automotive</option>
          <option>Medical</option>
          <option>Electronics</option>
          <option>Packaging</option>
        </select>
        <select className="rounded-lg border border-ui-border px-4 py-3" aria-label="Quantity Range">
          <option>Quantity Range</option>
          <option>1k - 10k</option>
          <option>10k - 100k</option>
          <option>100k+</option>
        </select>
      </div>
      <textarea
        className="min-h-[140px] rounded-lg border border-ui-border px-4 py-3"
        placeholder="Message"
        aria-label="Message"
      />
      <button
        type="submit"
        className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-red2"
      >
        Submit RFQ
      </button>
      {submitted ? (
        <p className="text-sm text-brand-navy">Thank you! We will respond within 24–48 hours.</p>
      ) : null}
    </form>
  );
}
