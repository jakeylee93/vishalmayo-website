import { AnimatedSection } from "@/components/animated-section";
import { ProjectsFilter } from "@/components/projects-filter";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-16 px-6 pb-24 pt-14 sm:space-y-20 sm:pt-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Projects"
          title="Eight case studies across product UX and web experiences"
          description="A curated set of projects focused on strategy-led design, strong visual systems, and measurable outcomes for real users."
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ProjectsFilter projects={projects} />
      </AnimatedSection>
    </div>
  );
}
