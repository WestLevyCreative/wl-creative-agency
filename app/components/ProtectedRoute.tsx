import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: string[];
}

export function ProtectedRoute({ children, requireRole }: ProtectedRouteProps) {
  const { user, userRole, loading } = useAuth();
  const router = useRouter();

  const roleLoading = loading || (requireRole && user && userRole === null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }

    if (!roleLoading && user && requireRole && !requireRole.includes(userRole || "")) {
      if (userRole === "partner") {
        router.push("/client/dashboard");
      } else {
        router.push("/portal");
      }
    }
  }, [user, userRole, loading, roleLoading, requireRole, router]);

  if (roleLoading) {
    return <div className="p-6 text-center text-muted-foreground">Loading...</div>;
  }

  return <>{children}</>;
}
