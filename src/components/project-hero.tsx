import type { Project } from "@/data/projects";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 px-6 py-16 sm:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: `radial-gradient(circle at 12% 20%, ${project.palette[1]}55, transparent 45%), radial-gradient(circle at 85% 20%, ${project.palette[2]}33, transparent 45%)`,
        }}
      />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.24em] text-accent">{project.type}</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
          {project.name}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">
          {project.description}
        </p>
      </div>
    </header>
  );
}
