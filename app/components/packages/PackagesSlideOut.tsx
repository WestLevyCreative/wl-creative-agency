import { useState } from "react";
import { X } from "lucide-react";
import { PackageCards } from "./PackageCards";
import { PricingPeriodToggle, type PricingPeriod } from "./PricingPeriodToggle";
import { cn } from "@/lib/utils";

interface PackagesSlideOutProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PackagesSlideOut = ({ isOpen, onClose }: PackagesSlideOutProps) => {
  const [pricingPeriod, setPricingPeriod] = useState<PricingPeriod>("monthly");

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Slide-out Panel - Full Screen */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-50 transition-transform duration-500 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="relative min-h-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-card hover:bg-card/80 border border-border transition-colors group"
            aria-label="Close packages"
          >
            <X className="w-6 h-6 text-foreground group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Content */}
          <div className="container-custom py-16 px-6">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Signature Partnerships
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Choose Your <span className="text-primary">Path</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Select the partnership tier that aligns with your visibility goals and budget.
              </p>
            </div>

            <PricingPeriodToggle period={pricingPeriod} onPeriodChange={setPricingPeriod} />

            <PackageCards period={pricingPeriod} />
          </div>
        </div>
      </div>
    </>
  );
};
