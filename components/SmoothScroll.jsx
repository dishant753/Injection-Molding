"use client";

import { useReducedMotion, useAnimationFrame, useMotionValue, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const FPS = 120;
const SMOOTHING = 0.12;

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);
  const lastTimeRef = useRef(0);
  const currentScrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const scrollY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const updateHeight = () => {
      if (!containerRef.current) return;
      setContentHeight(containerRef.current.getBoundingClientRect().height);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!contentHeight) return undefined;
    document.body.style.height = `${contentHeight}px`;

    return () => {
      document.body.style.height = "";
    };
  }, [contentHeight]);

  useAnimationFrame((time) => {
    if (prefersReducedMotion) return;
    const frameInterval = 1000 / FPS;
    if (time - lastTimeRef.current < frameInterval) return;
    lastTimeRef.current = time;

    targetScrollRef.current = window.scrollY || window.pageYOffset;
    currentScrollRef.current +=
      (targetScrollRef.current - currentScrollRef.current) * SMOOTHING;
    scrollY.set(-currentScrollRef.current);
  });

  if (prefersReducedMotion) {
    return <div ref={containerRef}>{children}</div>;
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ y: scrollY }}
      className="fixed left-0 top-0 w-full will-change-transform"
    >
      {children}
    </motion.div>
  );
}
