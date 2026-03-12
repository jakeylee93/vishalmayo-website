import Link from "next/link";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/vishalmayodesigns/" },
  { label: "Instagram", href: "https://www.instagram.com/vishalmayodesigns/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-mayo/" },
  { label: "Email", href: "mailto:hello@vishalmayo.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#121212]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400">
          Copyright {new Date().getFullYear()} Vishal Mayo. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-sm text-zinc-300 transition hover:text-accent"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
