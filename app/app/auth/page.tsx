import { Suspense } from "react";
import { AuthScreen } from "@/components/auth/AuthScreen";

export default function AuthPage() {
  return (
    <Suspense fallback={null}>
      <AuthScreen initialTab="partner" />
    </Suspense>
  );
}
