"use client";

import { useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 0.5; // pixels per frame

  // Duplicate projects for seamless loop
  const items = [...projects, ...projects];

  useAnimationFrame(() => {
    if (isPaused) return;
    setOffset((prev) => {
      const container = containerRef.current;
      if (!container) return prev;
      const singleSetWidth = container.scrollWidth / 2;
      const next = prev + speed;
      return next >= singleSetWidth ? 0 : next;
    });
  });

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc-950 to-transparent" />

      <div
        ref={containerRef}
        className="flex gap-6"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {items.map((project, i) => (
          <Link
            key={`${project.slug}-${i}`}
            href={`/projects/${project.slug}`}
            className="group block w-[340px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 sm:w-[400px]"
          >
            <div
              className="h-48 w-full sm:h-56"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, ${project.palette[1]}40, transparent 65%), linear-gradient(140deg, ${project.palette[0]} 5%, #171717 90%)`,
              }}
            />
            <div className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-accent/90">
                {project.type}
              </p>
              <h3 className="font-display text-xl text-white transition-colors group-hover:text-accent sm:text-2xl">
                {project.name}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-300">
                {project.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
