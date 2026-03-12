import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { ProjectCarousel } from "@/components/project-carousel";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects } from "@/data/projects";

const clientLogos = [
  "Hachette Learning",
  "TM Event Hire",
  "The Bar People",
  "Assemble Media Group",
  "Sanigone",
  "JHD Builders",
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-28 px-6 pb-24 pt-14 sm:space-y-32 sm:pt-20">
      <AnimatedSection className="min-h-[72vh] content-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">UI/UX & Product Designer</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Hello, my name&apos;s Vish. Designing with users in mind.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
          I&apos;m a UI/UX & Product Designer based in London and Essex.
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          I combine UI/UX craft with strong branding and marketing awareness to create products that are both elegant and strategically effective.
        </p>
      </AnimatedSection>

      <AnimatedSection className="space-y-10" delay={0.1}>
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects built for clarity, confidence, and measurable outcomes"
        />
        <ProjectCarousel projects={featuredProjects} />
      </AnimatedSection>

      <AnimatedSection className="grid gap-12 rounded-3xl border border-white/10 bg-zinc-900/60 p-8 lg:grid-cols-[1.3fr_1fr] lg:p-12" delay={0.15}>
        <SectionHeading
          eyebrow="Approach"
          title="Solutions made with purpose and strategy"
          description="Every project starts with user context, business priorities, and clear success criteria. Design decisions are intentional, tested, and aligned to long-term product growth."
        />
        <div className="grid gap-4 text-sm text-zinc-300 sm:text-base">
          <p className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
            User-centred discovery to define goals and opportunities.
          </p>
          <p className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
            Interface systems that scale with product and brand growth.
          </p>
          <p className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
            Delivery-ready design built for collaboration across teams.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-8" delay={0.2}>
        <SectionHeading
          eyebrow="Clients"
          title="Proud to have worked with these amazing companies"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 text-center text-sm uppercase tracking-[0.12em] text-zinc-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="rounded-3xl border border-accent/40 bg-[linear-gradient(135deg,rgba(164,195,178,0.12),rgba(20,20,20,0.95))] p-10 text-center sm:p-14" delay={0.25}>
        <h2 className="font-display text-3xl text-white sm:text-5xl">
          Let&apos;s work on your project together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          If you need UX strategy, a polished website, or a product experience refresh, I can help from concept through delivery.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full border border-accent bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-950 transition hover:bg-accent-soft"
        >
          Start a project
        </Link>
      </AnimatedSection>
    </div>
  );
}
