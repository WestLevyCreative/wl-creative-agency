import { cn } from "@/lib/utils";

export type PricingPeriod = "monthly" | "yearly";

interface PricingPeriodToggleProps {
  period: PricingPeriod;
  onPeriodChange: (period: PricingPeriod) => void;
}

export const PricingPeriodToggle = ({ period, onPeriodChange }: PricingPeriodToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-sm font-medium transition-colors",
          period === "monthly" ? "text-foreground" : "text-muted-foreground"
        )}>
          Monthly
        </span>
        <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          Save 5%
        </span>
      </div>

      <button
        onClick={() => onPeriodChange(period === "monthly" ? "yearly" : "monthly")}
        className={cn(
          "relative w-14 h-7 rounded-full transition-colors duration-300",
          period === "yearly" ? "bg-primary" : "bg-muted"
        )}
        aria-label="Toggle pricing period"
      >
        <span
          className={cn(
            "absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",
            period === "yearly" && "translate-x-7"
          )}
        />
      </button>

      <div className="flex items-center gap-2">
        <span className={cn(
          "text-sm font-medium transition-colors",
          period === "yearly" ? "text-foreground" : "text-muted-foreground"
        )}>
          Yearly
        </span>
        <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          Save 10%
        </span>
      </div>
    </div>
  );
};
