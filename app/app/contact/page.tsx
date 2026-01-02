"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const locations = [
  { city: "Milano", country: "Italy", icon: "🇮🇹" },
  { city: "Monte Carlo", country: "Monaco", icon: "🇲🇨" },
  { city: "Dallas", country: "Texas", icon: "🇺🇸" },
  { city: "Atlanta", country: "Georgia", icon: "🇺🇸" },
];

const inquiryTypes = [
  "General Inquiry",
  "Partnership Opportunity",
  "Press & Media",
  "Hire Us",
];

export default function Contact() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const agentId = searchParams.get("agent_id");

  useEffect(() => {
    if (agentId) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: prev.inquiryType || "Hire Us",
      }));
    }
  }, [agentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("inquiries").insert({
        agent_id: agentId || null,
        name: formData.name,
        email: formData.email,
        inquiry_type: formData.inquiryType || null,
        message: formData.message || null,
        source: "contact_form",
        metadata: agentId ? { agent_id: agentId } : null,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We will get back to you within 24 hours.",
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
    } catch (err: unknown) {
      console.error("Inquiry submit error:", err);
      toast({
        title: "Submission failed",
        description: err instanceof Error ? err.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-card overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <span className="text-sm uppercase tracking-wider text-muted-foreground mb-4 block">
            {`Let's Connect`}
          </span>
          <h1 className="font-h1 text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-primary">Together</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            {`Ready to move mountains? Let's start a conversation about your vision.`}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionHeading
                  eyebrow="West Levy Creative Agency"
                  title="Get in"
                  titleAccent="Touch"
                  className="mb-6"
                />
                <p className="text-muted-foreground">
                  {`Whether you're ready to launch a campaign or just exploring possibilities,
                  we're here to listen and guide you forward.`}
                </p>
              </div>

              {/* Locations */}
              <div>
                <h3 className="font-h3-h6 text-lg font-semibold text-foreground mb-4">
                  Our Locations
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <div
                      key={location.city}
                      className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <span className="text-2xl mb-2 block">{location.icon}</span>
                      <p className="font-medium text-foreground">{location.city}</p>
                      <p className="text-sm text-muted-foreground">{location.country}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>hello@westlevy.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <span>+1 (307) 419-9230</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
                <div className="mb-8">
                  <h3 className="font-h3-h6 text-2xl font-bold text-foreground">
                    Send a <span className="text-primary">Message</span>
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {`Fill out the form below and we'll respond within 24 hours.`}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-h3-h6 text-xl font-semibold text-foreground mb-2">
                      Thank you!
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      {`Your message has been sent. We'll be in touch soon.`}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-primary text-primary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Full Name
                        </label>
                        <Input
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Inquiry Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, inquiryType: type })}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                              formData.inquiryType === type
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-background border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
                    >
                      {isSubmitting ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2 animate-pulse" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
