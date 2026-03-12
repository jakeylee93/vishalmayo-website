type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${alignment} max-w-3xl`}>
      {eyebrow ? (
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
