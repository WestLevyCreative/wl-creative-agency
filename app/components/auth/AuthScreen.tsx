"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type AuthPortal = "client" | "agent";

interface AuthScreenProps {
  initialTab?: AuthPortal;
}

export function AuthScreen({ initialTab = "client" }: AuthScreenProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const redirectTo = searchParams.get("redirectTo");
  const urlTab = searchParams.get("mode");
  const [portal, setPortal] = useState<AuthPortal>(
    urlTab === "agent" || urlTab === "client" ? urlTab : initialTab
  );
  const [clientLoading, setClientLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [agentLoading, setAgentLoading] = useState(false);

  const [clientForm, setClientForm] = useState({ email: "", password: "" });
  const [agentForm, setAgentForm] = useState({ email: "", password: "" });

  const clientDestination = useMemo(() => redirectTo || "/client", [redirectTo]);
  const agentDestination = useMemo(() => redirectTo || "/portal", [redirectTo]);

  const handleClientSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setClientLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: clientForm.email,
        password: clientForm.password,
      });
      if (error) throw error;
      toast({
        title: "Welcome back",
        description: "Client/Partner dashboard is loading.",
      });
      router.push(clientDestination);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to sign in. Please try again.";
      toast({ title: "Sign in failed", description: message, variant: "destructive" });
    } finally {
      setClientLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!clientForm.email) {
      toast({ title: "Add your email", description: "Enter your email to reset your password." });
      return;
    }
    setResetLoading(true);
    try {
      const redirect = `${window.location.origin}/auth`;
      const { error } = await supabase.auth.resetPasswordForEmail(clientForm.email, {
        redirectTo: redirect,
      });
      if (error) throw error;
      toast({
        title: "Reset link sent",
        description: "Check your inbox for a secure reset link.",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to send reset link.";
      toast({ title: "Reset failed", description: message, variant: "destructive" });
    } finally {
      setResetLoading(false);
    }
  };

  const handleAgentSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAgentLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: agentForm.email,
        password: agentForm.password,
      });
      if (error) throw error;
      toast({
        title: "Welcome, Agent",
        description: "Your workspace is loading.",
      });
      router.push(agentDestination);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to sign in. Please try again.";
      toast({ title: "Sign in failed", description: message, variant: "destructive" });
    } finally {
      setAgentLoading(false);
    }
  };

  const badgeClasses =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/10 text-muted-foreground";

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-[#0b171a] to-[#0f1318]">
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="gradient-glow w-full h-full" />
        </div>
        <div className="container-custom relative max-w-6xl">
          <div className="mb-10 flex flex-col gap-3 text-center">
            <span className={badgeClasses}>Secure Portals</span>
            <h1 className="font-h1 text-4xl md:text-5xl font-bold text-foreground">
              Choose your <span className="text-gradient">West Levy</span> portal
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Agents access private workspaces via their secure link. Clients and partners log in to
              manage campaigns, billing, and shared assets. Role-based access keeps data isolated
              and protected.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Hero / Instructions */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/10" />
              <div className="relative p-8 md:p-10 flex flex-col gap-8 h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Two tailored experiences</p>
                    <h2 className="text-2xl font-h2 font-semibold text-foreground">
                      Agents & Clients
                    </h2>
                  </div>
                  <Link
                    href="/"
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    Back to site
                  </Link>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Role-based access control</p>
                      <p className="text-sm text-muted-foreground">
                        Separate workspaces, permissions, and dashboards for agents and clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Clear instructions per role</p>
                      <p className="text-sm text-muted-foreground">
                        Agents enter from private links. Clients/partners sign in with their
                        dashboard credentials.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Help for first-time users</p>
                      <p className="text-sm text-muted-foreground">
                        Need access? Contact hello@westlevy.com and we’ll resend your secure link.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto rounded-xl border border-white/5 bg-white/5 p-5 space-y-3">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Security checklist
                  </p>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li>• SSL enforced on all portals</li>
                    <li>• Rate limiting and session rotation enabled</li>
                    <li>• Data segmented by role and workspace</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Forms */}
            <div className="space-y-4">
              <div className="flex gap-2 rounded-full bg-card/70 border border-border p-1 w-fit">
                <button
                  type="button"
                  onClick={() => setPortal("client")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    portal === "client"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Client / Partner
                </button>
                <button
                  type="button"
                  onClick={() => setPortal("agent")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    portal === "agent"
                      ? "bg-secondary text-secondary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Agent
                </button>
              </div>

              {portal === "client" ? (
                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-8 space-y-6 shadow-lg">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Client / Partner Login
                    </p>
                    <h3 className="text-2xl font-h2 font-semibold text-foreground">
                      Access your dashboard
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Use the credentials sent with your purchase. Password recovery is available
                      below.
                    </p>
                  </div>
                  <form className="space-y-4" onSubmit={handleClientSignIn}>
                    <div className="space-y-2">
                      <Label htmlFor="client-email">Email</Label>
                      <Input
                        id="client-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={clientForm.email}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="client-password">Password</Label>
                        <button
                          type="button"
                          onClick={handlePasswordReset}
                          className="text-xs text-primary hover:underline"
                          disabled={resetLoading}
                        >
                          {resetLoading ? "Sending..." : "Forgot password?"}
                        </button>
                      </div>
                      <Input
                        id="client-password"
                        type="password"
                        required
                        autoComplete="current-password"
                        value={clientForm.password}
                        onChange={(e) =>
                          setClientForm({ ...clientForm, password: e.target.value })
                        }
                        placeholder="Enter your password"
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={clientLoading}>
                      {clientLoading ? "Signing in..." : "Sign in"}
                    </Button>
                  </form>
                  <div className="rounded-lg border border-border bg-muted/10 p-4 text-sm text-muted-foreground">
                    Need access? Check your welcome email for your unique dashboard link or contact{" "}
                    <a className="text-primary underline" href="mailto:hello@westlevy.com">
                      hello@westlevy.com
                    </a>
                    .
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-8 space-y-6 shadow-lg">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Agent Portal
                    </p>
                    <h3 className="text-2xl font-h2 font-semibold text-foreground">
                      Sign in from your private link
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Agents sign in only from their issued link. No self-signup. Customize your
                      dashboard after login.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link href="/agent-login" className="w-full">
                      <Button variant="secondary" className="w-full">
                        Go to Agent Login
                      </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      Tip: Save your private link. If you need it resent, reach out to your program
                      lead.
                    </p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <form className="space-y-4" onSubmit={handleAgentSignIn}>
                      <div className="space-y-2">
                        <Label htmlFor="agent-email">Agent email</Label>
                        <Input
                          id="agent-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={agentForm.email}
                          onChange={(e) => setAgentForm({ ...agentForm, email: e.target.value })}
                          placeholder="agent@westlevy.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="agent-password">Password</Label>
                        <Input
                          id="agent-password"
                          type="password"
                          required
                          autoComplete="current-password"
                          value={agentForm.password}
                          onChange={(e) =>
                            setAgentForm({ ...agentForm, password: e.target.value })
                          }
                          placeholder="Enter your password"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={agentLoading}>
                        {agentLoading ? "Signing in..." : "Sign in"}
                      </Button>
                    </form>
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 text-sm text-muted-foreground shadow-inner">
                <div className="flex flex-wrap gap-4">
                  <div className="space-y-1">
                    <p className="text-foreground font-medium">Need help?</p>
                    <p>First-time users: use the secure link we sent. If you cannot find it, we can resend.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-foreground font-medium">Security</p>
                    <p>Sessions are rotated and rate limited. Keep your link private.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
