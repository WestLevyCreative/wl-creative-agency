import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MegaMenu } from "../navigation/MegaMenu";
import { Footer } from "./Footer";
import { PackagesSlideOut } from "../packages/PackagesSlideOut";
import { PackagesTriggerButton } from "../packages/PackagesTriggerButton";
import { PackagesTooltip } from "../packages/PackagesTooltip";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const pathname = usePathname();

  // Show trigger button on all pages except home and services
  const showTriggerButton = !['/', '/services'].includes(pathname);

  // Show tooltip on page load (after 2 seconds)
  useEffect(() => {
    if (!showTriggerButton) return;

    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showTriggerButton, pathname]);

  // Exit intent detection
  useEffect(() => {
    if (!showTriggerButton) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves from the top of the page (likely closing tab or going to address bar)
      if (e.clientY <= 0) {
        setShowTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showTriggerButton]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MegaMenu />
      <main className="flex-1 pt-[73px]">
        {children}
      </main>
      <Footer />

      {/* Floating Packages Trigger Button - only on non-home/services pages */}
      {showTriggerButton && (
        <>
          <PackagesTriggerButton onClick={() => setIsPackagesOpen(true)} />
          <PackagesTooltip isVisible={showTooltip} />
        </>
      )}

      {/* Packages Slide-out */}
      <PackagesSlideOut isOpen={isPackagesOpen} onClose={() => setIsPackagesOpen(false)} />
    </div>
  );
}
