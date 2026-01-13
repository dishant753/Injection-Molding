"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedCard({ title, description }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="card p-6"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="text-lg font-semibold text-ui-text">{title}</h3>
      <p className="mt-2 text-sm text-ui-muted">{description}</p>
    </motion.div>
  );
}
