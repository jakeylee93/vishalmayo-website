import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { ProjectHero } from "@/components/project-hero";
import { SectionHeading } from "@/components/section-heading";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl space-y-14 px-6 pb-24 pt-14 sm:space-y-16 sm:pt-20">
      <AnimatedSection>
        <ProjectHero project={project} />
      </AnimatedSection>

      <AnimatedSection className="grid gap-8 lg:grid-cols-2" delay={0.1}>
        <article className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
          <SectionHeading title="The challenge" />
          <p className="mt-5 text-base leading-relaxed text-zinc-300">{project.challenge}</p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
          <SectionHeading title="The user" />
          <p className="mt-5 text-base leading-relaxed text-zinc-300">{project.users}</p>
        </article>
      </AnimatedSection>

      <AnimatedSection className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8" delay={0.15}>
        <SectionHeading title="Design decisions" />
        <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-300">{project.designDecisions}</p>
      </AnimatedSection>

      <AnimatedSection className="space-y-8" delay={0.2}>
        <SectionHeading
          title="Results and snapshots"
          description="Outcome indicators and visual placeholders representing key screens and components."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="h-48 rounded-2xl border border-white/10"
              style={{
                backgroundImage: `radial-gradient(circle at 22% 20%, ${project.palette[1]}50, transparent 45%), linear-gradient(150deg, ${project.palette[0]}, #18181b 72%)`,
              }}
            />
          ))}
        </div>
        <div className="grid gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-6 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <p key={metric} className="text-sm text-zinc-300">
              {metric}
            </p>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
