"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const steps = ["Clamp", "Inject", "Cool", "Eject"];

export default function TimelineProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%", once: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="flex flex-col gap-6 md:flex-row md:items-center">
      {steps.map((step, index) => (
        <motion.div
          key={step}
          className="flex flex-1 flex-col items-center gap-3 text-center"
          initial={prefersReducedMotion ? false : { opacity: 0.4, y: 12 }}
          animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.15 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ui-border bg-ui-s1 text-brand-navy">
            {index + 1}
          </div>
          <span className="text-sm font-semibold text-ui-text">{step}</span>
          {index < steps.length - 1 ? (
            <div className="hidden h-px w-full bg-ui-border md:block" />
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
