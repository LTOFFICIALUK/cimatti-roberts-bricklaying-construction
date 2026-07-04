interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 max-w-2xl ${alignClass}`}>
      {label && (
        <span className="mb-3 inline-block rounded-full bg-gold/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-dark">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      )}
    </div>
  );
};
