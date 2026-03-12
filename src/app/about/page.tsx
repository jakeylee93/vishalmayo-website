import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects } from "@/data/projects";

const skills = [
  "User Experience Design",
  "User Interface Design",
  "Design Systems",
  "Wireframing & Prototyping",
  "Branding",
  "Website Design & Build",
  "Stakeholder Collaboration",
  "Conversion-Focused UX",
];

const tools = ["Figma", "Adobe Creative Cloud", "Framer", "Notion", "Miro", "Webflow", "WordPress"];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-24 px-6 pb-24 pt-14 sm:pt-20">
      <AnimatedSection className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="min-h-[360px] rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(164,195,178,0.45),transparent_45%),linear-gradient(165deg,#1f1f1f,#121212)]" />
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-accent">About Vishal Mayo</p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Designing beautiful, user-friendly products with clear intent
          </h1>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            I&apos;m a UI/UX designer with a passion for crafting digital products that are elegant, usable, and commercially effective. I focus on experiences that work for users and scale for businesses.
          </p>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            I currently work as Senior UI/UX Designer at Hachette Learning, where I help shape product experiences and design systems across digital platforms.
          </p>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            Alongside my in-house role, I provide freelance UX/UI design, branding, and website building services for growing businesses.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid gap-8 rounded-3xl border border-white/10 bg-zinc-900/65 p-8 lg:grid-cols-2 lg:p-12" delay={0.1}>
        <div>
          <SectionHeading title="Skills" description="Practical capabilities developed across product, brand, and web projects." />
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading title="Tools" description="Core tools used across research, design, and delivery." />
          <div className="mt-6 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm text-zinc-100">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-10" delay={0.2}>
        <SectionHeading
          eyebrow="Featured"
          title="A selection of recent project work"
          description="Case studies spanning web design, product UX, and strategic visual systems."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-flex rounded-full border border-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent transition hover:bg-accent hover:text-zinc-950"
        >
          View all projects
        </Link>
      </AnimatedSection>
    </div>
  );
}
