"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectType } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

type FilterType = "All" | ProjectType;

type ProjectsFilterProps = {
  projects: Project[];
};

const filters: FilterType[] = ["All", "Web Design & Build", "UI/UX Design"];

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [active, setActive] = useState<FilterType>("All");

  const visible = useMemo(() => {
    if (active === "All") {
      return projects;
    }

    return projects.filter((project) => project.type === active);
  }, [active, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
              active === filter
                ? "border-accent bg-accent text-zinc-950"
                : "border-white/20 text-zinc-300 hover:border-accent/60"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
