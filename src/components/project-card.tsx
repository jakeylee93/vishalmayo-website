import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 transition-all duration-500 hover:-translate-y-1 hover:border-accent/60"
    >
      <div
        className="h-56 w-full"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, ${project.palette[1]}40, transparent 65%), linear-gradient(140deg, ${project.palette[0]} 5%, #171717 90%)`,
        }}
      />
      <div className="space-y-3 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-accent/90">{project.type}</p>
        <h3 className="font-display text-2xl text-white transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-300">{project.shortDescription}</p>
      </div>
    </Link>
  );
}
