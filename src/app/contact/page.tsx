import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/vishalmayodesigns/" },
  { label: "Instagram", href: "https://www.instagram.com/vishalmayodesigns/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-mayo/" },
  { label: "Email", href: "mailto:hello@vishalmayo.com" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-14 px-6 pb-24 pt-14 sm:space-y-16 sm:pt-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s collaborate!"
          description="Tell me about your project goals, timeline, and where you need support."
        />
      </AnimatedSection>

      <AnimatedSection className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]" delay={0.1}>
        <ContactForm />
        <aside className="space-y-5 rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8">
          <h2 className="font-display text-2xl text-white">Connect</h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            Prefer social or direct email? Reach out through any channel below.
          </p>
          <div className="space-y-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-200 transition hover:border-accent hover:text-accent"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </aside>
      </AnimatedSection>
    </div>
  );
}
