"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FeatureCard({ title, description, icon }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="card flex h-full flex-col gap-3 p-6"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ui-s2 text-brand-navy">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-ui-text">{title}</h3>
      <p className="text-sm text-ui-muted">{description}</p>
    </motion.div>
  );
}
