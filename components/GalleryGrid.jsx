"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import LightboxModal from "./LightboxModal";

const ITEMS_PER_LOAD = 12;

export default function GalleryGrid({ items, filters }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [activeItem, setActiveItem] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setVisibleCount(ITEMS_PER_LOAD);
            }}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
              activeFilter === filter
                ? "border-brand-red bg-brand-red text-white"
                : "border-ui-border text-ui-muted hover:border-brand-navy2"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="card overflow-hidden text-left"
            aria-label={`View details for ${item.title}`}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <div className="relative h-44">
              <Image src={item.images[0]} alt={item.title} fill className="object-cover" />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="text-base font-semibold text-ui-text">{item.title}</h3>
              <div className="flex flex-wrap gap-2 text-xs text-ui-muted">
                <span>{item.material}</span>
                <span>•</span>
                <span>{item.finish}</span>
                <span>•</span>
                <span>{item.category}</span>
              </div>
              <span className="text-xs font-semibold text-brand-red">View Details</span>
            </div>
          </motion.button>
        ))}
      </div>
      {visibleCount < filteredItems.length ? (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount((count) => count + ITEMS_PER_LOAD)}
            className="rounded-full border border-ui-border px-6 py-3 text-sm font-semibold text-ui-text transition hover:border-brand-navy2"
          >
            Load more
          </button>
        </div>
      ) : null}
      {activeItem ? (
        <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
      ) : null}
    </div>
  );
}
