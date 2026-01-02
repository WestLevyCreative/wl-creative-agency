"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type AuthTab = "partner" | "agent";
type AgentMode = "signin" | "signup";

interface AuthScreenProps {
  initialTab?: AuthTab;
}

export function AuthScreen({ initialTab = "partner" }: AuthScreenProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const redirectTo = searchParams.get("redirectTo");
  const urlTab = searchParams.get("mode");
  const [tab, setTab] = useState<AuthTab>(
    urlTab === "agent" || urlTab === "partner" ? urlTab : initialTab
  );
  const [agentMode, setAgentMode] = useState<AgentMode>("signin");
  const [partnerLoading, setPartnerLoading] = useState(false);
  const [agentLoading, setAgentLoading] = useState(false);

  const [partnerForm, setPartnerForm] = useState({ email: "", password: "" });
  const [agentForm, setAgentForm] = useState({ email: "", password: "", fullName: "" });

  const partnerDestination = useMemo(() => redirectTo || "/client", [redirectTo]);
  const agentDestination = useMemo(() => redirectTo || "/portal", [redirectTo]);

  const handlePartnerSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: partnerForm.email,
        password: partnerForm.password,
      });
      if (error) throw error;
      toast({ title: "Welcome back", description: "Redirecting to your client dashboard." });
      router.push(partnerDestination);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to sign in. Please try again.";
      toast({ title: "Sign in failed", description: message, variant: "destructive" });
    } finally {
      setPartnerLoading(false);
    }
  };

  const handleAgentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAgentLoading(true);
    try {
      if (agentMode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({
          email: agentForm.email,
          password: agentForm.password,
        });
        if (error) throw error;
        toast({ title: "Welcome back", description: "Redirecting to your portal." });
        router.push(agentDestination);
      } else {
        const { error } = await supabase.auth.signUp({
          email: agentForm.email,
          password: agentForm.password,
          options: {
            data: { full_name: agentForm.fullName || undefined },
            emailRedirectTo: `${window.location.origin}/portal`,
          },
        });
        if (error) throw error;
        toast({
          title: "Check your email",
          description: "Confirm your email to finish setting up your agent account.",
        });
        setAgentMode("signin");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to continue. Please try again.";
      toast({ title: "Authentication failed", description: message, variant: "destructive" });
    } finally {
      setAgentLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-20 md:py-28">
        <div className="container-custom max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Secure Access
            </p>
            <h1 className="font-h1 text-4xl md:text-5xl font-bold text-foreground">
              Portal <span className="text-primary">Login</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Partners access your campaigns and billing. Agents access your workspace and inquiries.
            </p>
          </div>

          <div className="bg-card/60 backdrop-blur border border-border rounded-2xl shadow-lg p-6 md:p-8">
            <Tabs value={tab} onValueChange={(value) => setTab(value as AuthTab)}>
              <TabsList className="grid grid-cols-2 w-full mb-6">
                <TabsTrigger value="partner">Partners</TabsTrigger>
                <TabsTrigger value="agent">Agents</TabsTrigger>
              </TabsList>

              <TabsContent value="partner">
                <div className="space-y-6">
                  <div className="rounded-lg bg-muted/40 p-4 text-sm text-muted-foreground border border-border">
                    Partner accounts are invitation-only. Contact us at{" "}
                    <a href="mailto:hello@westlevy.com" className="text-primary underline">
                      hello@westlevy.com
                    </a>{" "}
                    if you need access.
                  </div>
                  <form className="space-y-4" onSubmit={handlePartnerSignIn}>
                    <div className="space-y-2">
                      <Label htmlFor="partner-email">Email</Label>
                      <Input
                        id="partner-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="partner-password">Password</Label>
                      <Input
                        id="partner-password"
                        type="password"
                        required
                        autoComplete="current-password"
                        value={partnerForm.password}
                        onChange={(e) =>
                          setPartnerForm({ ...partnerForm, password: e.target.value })
                        }
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={partnerLoading}>
                      {partnerLoading ? "Signing in..." : "Sign in"}
                    </Button>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="agent">
                <div className="mb-4 flex gap-2 rounded-lg bg-muted/40 p-2 text-sm">
                  <button
                    type="button"
                    onClick={() => setAgentMode("signin")}
                    className={cn(
                      "flex-1 rounded-md py-2 text-center font-medium transition-colors",
                      agentMode === "signin"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => setAgentMode("signup")}
                    className={cn(
                      "flex-1 rounded-md py-2 text-center font-medium transition-colors",
                      agentMode === "signup"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    Sign Up
                  </button>
                </div>

                <form className="space-y-4" onSubmit={handleAgentSubmit}>
                  {agentMode === "signup" && (
                    <div className="space-y-2">
                      <Label htmlFor="agent-name">Full name</Label>
                      <Input
                        id="agent-name"
                        type="text"
                        autoComplete="name"
                        value={agentForm.fullName}
                        onChange={(e) =>
                          setAgentForm({ ...agentForm, fullName: e.target.value })
                        }
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="agent-email">Email</Label>
                    <Input
                      id="agent-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={agentForm.email}
                      onChange={(e) => setAgentForm({ ...agentForm, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agent-password">Password</Label>
                    <Input
                      id="agent-password"
                      type="password"
                      required
                      autoComplete={agentMode === "signup" ? "new-password" : "current-password"}
                      value={agentForm.password}
                      onChange={(e) => setAgentForm({ ...agentForm, password: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={agentLoading}>
                    {agentLoading
                      ? agentMode === "signin"
                        ? "Signing in..."
                        : "Creating account..."
                      : agentMode === "signin"
                        ? "Sign in"
                        : "Create account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
}
