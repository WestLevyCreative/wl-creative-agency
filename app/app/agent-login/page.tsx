import { Suspense } from "react";
import { AuthScreen } from "@/components/auth/AuthScreen";

export default function AgentLoginPage() {
  return (
    <Suspense fallback={null}>
      <AuthScreen initialTab="agent" />
    </Suspense>
  );
}
