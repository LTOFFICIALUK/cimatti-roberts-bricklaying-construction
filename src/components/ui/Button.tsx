import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const Button = ({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ariaLabel,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  const variants = {
    primary: "bg-gold text-charcoal hover:bg-gold-dark shadow-sm",
    secondary: "bg-charcoal text-white hover:bg-charcoal-light shadow-sm",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-charcoal",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
};
