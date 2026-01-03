import { cn } from "@/lib/utils";

export type PricingPeriod = "monthly" | "sixMonth" | "yearly";

interface PricingPeriodToggleProps {
  period: PricingPeriod;
  onPeriodChange: (period: PricingPeriod) => void;
}

export const PricingPeriodToggle = ({ period, onPeriodChange }: PricingPeriodToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      {/* Monthly Pill */}
      <button
        onClick={() => onPeriodChange("monthly")}
        className={cn(
          "relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border-2",
          period === "monthly"
            ? "bg-primary text-background border-primary shadow-lg shadow-primary/25"
            : "bg-muted text-muted-foreground border-border hover:bg-muted/80 hover:border-primary/50"
        )}
      >
        Monthly
      </button>

      {/* 6 Months Pill */}
      <button
        onClick={() => onPeriodChange("sixMonth")}
        className={cn(
          "relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border-2",
          period === "sixMonth"
            ? "bg-primary text-background border-primary shadow-lg shadow-primary/25"
            : "bg-muted text-muted-foreground border-border hover:bg-muted/80 hover:border-primary/50"
        )}
      >
        <span>6 Months</span>
        <span className={cn(
          "ml-2 px-2 py-0.5 rounded-full text-xs font-semibold",
          period === "sixMonth"
            ? "bg-background/20 text-background"
            : "bg-primary/10 text-primary"
        )}>
          5%
        </span>
      </button>

      {/* Yearly Pill */}
      <button
        onClick={() => onPeriodChange("yearly")}
        className={cn(
          "relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border-2",
          period === "yearly"
            ? "bg-primary text-background border-primary shadow-lg shadow-primary/25"
            : "bg-muted text-muted-foreground border-border hover:bg-muted/80 hover:border-primary/50"
        )}
      >
        <span>Yearly</span>
        <span className={cn(
          "ml-2 px-2 py-0.5 rounded-full text-xs font-semibold",
          period === "yearly"
            ? "bg-background/20 text-background"
            : "bg-primary/10 text-primary"
        )}>
          10%
        </span>
      </button>
    </div>
  );
};
