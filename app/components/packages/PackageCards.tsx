import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { pricingTiers, serviceDetails } from "@/data/services";
import { cn } from "@/lib/utils";
import type { PricingPeriod } from "./PricingPeriodToggle";
import { useToast } from "@/hooks/use-toast";

interface PackageCardsProps {
  period?: PricingPeriod;
}

export const PackageCards = ({ period = "monthly" }: PackageCardsProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>({});
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);

  const toggleTierExpansion = (tierId: string) => {
    setExpandedTiers(prev => ({ ...prev, [tierId]: !prev[tierId] }));
  };

  const handleCheckout = async (tierId: string, priceId: string) => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl) {
      toast({
        title: "Configuration error",
        description: "Supabase URL missing. Check your environment variables.",
        variant: "destructive",
      });
      return;
    }

    const successUrl = `${window.location.origin}/checkout/success`;
    const cancelUrl = `${window.location.origin}/checkout/cancel`;
    const checkoutEndpoint = `${supabaseUrl}/functions/v1/create-checkout-session`;

    setCheckoutLoading(tierId);

    try {
      const response = await fetch(checkoutEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(supabaseAnonKey ? { Authorization: `Bearer ${supabaseAnonKey}` } : {}),
        },
        body: JSON.stringify({
          priceId,
          successUrl,
          cancelUrl,
          tierId,
          period,
        }),
      });

      if (!response.ok) throw new Error('Failed to create checkout session');

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: "Unable to start checkout. Please try again.",
        variant: "destructive",
      });
      setCheckoutLoading(null);
    }
  };

  const getServiceDetail = (serviceName: string) => {
    const lowerServiceName = serviceName.toLowerCase();
    if (lowerServiceName.includes("podcast") || lowerServiceName.includes("editorial feature")) {
      return serviceDetails.find(s => s.id === "podcast-editorial-features");
    }
    if (lowerServiceName.includes("press release")) {
      return serviceDetails.find(s => s.id === "press-releases");
    }
    if (lowerServiceName.includes("brand") || lowerServiceName.includes("messaging") || lowerServiceName.includes("story")) {
      return serviceDetails.find(s => s.id === "brand-messaging");
    }
    if (lowerServiceName.includes("media list")) {
      return serviceDetails.find(s => s.id === "media-lists");
    }
    if (lowerServiceName.includes("performance") || lowerServiceName.includes("snapshot") || lowerServiceName.includes("analytics")) {
      return serviceDetails.find(s => s.id === "performance-reporting");
    }
    if (lowerServiceName.includes("epk") || lowerServiceName.includes("media kit")) {
      return serviceDetails.find(s => s.id === "epk-media-kit");
    }
    if (lowerServiceName.includes("strategy call") || lowerServiceName.includes("zoom")) {
      return serviceDetails.find(s => s.id === "strategy-calls");
    }
    if (lowerServiceName.includes("editorial placement") || lowerServiceName.includes("brand mention")) {
      return serviceDetails.find(s => s.id === "editorial-placements");
    }
    if (lowerServiceName.includes("influencer") || lowerServiceName.includes("collaboration")) {
      return serviceDetails.find(s => s.id === "influencer-collaborations");
    }
    if (lowerServiceName.includes("content strategy") || lowerServiceName.includes("seo")) {
      return serviceDetails.find(s => s.id === "content-strategy");
    }
    if (lowerServiceName.includes("dedicated") || lowerServiceName.includes("strategist") || lowerServiceName.includes("account support")) {
      return serviceDetails.find(s => s.id === "dedicated-support");
    }
    return null;
  };

  const selectedServiceDetail = selectedService ? getServiceDetail(selectedService) : null;

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingTiers.map((tier) => {
          const isExpanded = expandedTiers[tier.id];
          const visibleFeatures = isExpanded ? tier.features : tier.features.slice(0, 4);
          const hasMoreFeatures = tier.features.length > 4;
          const price = period === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
          const priceId = tier.stripePriceIds[period];
          const isLoading = checkoutLoading === tier.id;

          return (
            <div key={tier.id} className={cn("rounded-lg border overflow-hidden flex flex-col", tier.highlighted ? "border-primary bg-card" : "border-border bg-card/50")}>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-xl font-semibold text-foreground">{tier.name}</h3>
                <p className="text-secondary text-sm mt-1">{tier.tagline}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{tier.currency}{price.toLocaleString()}</span>
                  <span className="text-muted-foreground">/{period === "monthly" ? "month" : "year"}</span>
                </div>
                {period === "yearly" && (
                  <p className="text-xs text-muted-foreground mt-1">
                    ~{tier.currency}{Math.round(tier.yearlyPrice / 12).toLocaleString()}/month
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-4">{tier.description}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {visibleFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors group"
                      onClick={() => setSelectedService(feature)}
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:underline">{feature}</span>
                    </li>
                  ))}
                </ul>
                {hasMoreFeatures && (
                  <button
                    onClick={() => toggleTierExpansion(tier.id)}
                    className="w-full mt-4 flex items-center justify-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <span>Show less</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Show all services ({tier.features.length})</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
              <div className="bg-[#7dd3c0] p-6 mt-auto">
                <Button
                  onClick={() => handleCheckout(tier.id, priceId)}
                  disabled={isLoading}
                  className="w-full bg-black text-white hover:bg-black/90 font-semibold text-base h-12"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Start Partnership Now"
                  )}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{selectedServiceDetail?.name}</DialogTitle>
            <DialogDescription className="text-base mt-4">
              {selectedServiceDetail?.shortDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-6">
            <Button
              onClick={() => {
                router.push(selectedServiceDetail?.fullDescriptionPath || "/services");
                setSelectedService(null);
              }}
              variant="outline"
              className="w-full"
            >
              View Full Details
            </Button>
            <Button
              onClick={() => {
                router.push("/contact");
                setSelectedService(null);
              }}
              className="w-full bg-primary text-primary-foreground"
            >
              Begin Partnership
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
