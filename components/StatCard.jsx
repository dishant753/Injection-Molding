"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function StatCard({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      motionValue.set(value);
      return undefined;
    }
    const controls = animate(motionValue, value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [isInView, motionValue, prefersReducedMotion, value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 rounded-xl border border-ui-border bg-ui-s1 px-6 py-4 shadow-soft"
    >
      <motion.span className="text-2xl font-semibold text-ui-text">
        {rounded}
        <span className="text-brand-red">+</span>
      </motion.span>
      <span className="text-xs uppercase tracking-wide text-ui-muted">{label}</span>
    </motion.div>
  );
}
