import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-medium tracking-wider uppercase text-muted-foreground mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-h2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        <span className="text-white">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-2 font-h3-h6 text-xl md:text-2xl font-medium text-secondary">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
