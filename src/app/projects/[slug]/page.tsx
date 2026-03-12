import Image from "next/image";
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

      {/* Screenshot */}
      {project.image && (
        <AnimatedSection delay={0.05}>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={project.image}
              alt={`${project.name} website screenshot`}
              width={1200}
              height={800}
              className="w-full object-cover"
              priority
            />
          </div>
        </AnimatedSection>
      )}

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
          title="Results and impact"
          description="Outcome indicators and key metrics from the project."
        />
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
