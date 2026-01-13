"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "./Buttons";

export default function HeroIntro() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="max-w-3xl text-4xl font-semibold text-ui-text md:text-5xl">
        Precision Injection Moulding for High-Volume Production
      </h1>
      <p className="mt-4 max-w-2xl text-base text-ui-muted">
        Tooling, molding, assembly, and quality — under one roof.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
        <SecondaryButton href="/capabilities">Download Capability Deck</SecondaryButton>
      </div>
    </motion.div>
  );
}
