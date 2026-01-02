import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackagesTriggerButtonProps {
  onClick: () => void;
  className?: string;
}

export const PackagesTriggerButton = ({ onClick, className }: PackagesTriggerButtonProps) => {
  return (
    <>
      {/* Desktop Tab - Vertical on Right Side */}
      <button
        onClick={onClick}
        className={cn(
          "hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-[100]",
          "flex-col items-center gap-2 px-3 py-6",
          "bg-gradient-to-b from-primary to-[#7dd3c0]",
          "text-black font-semibold text-sm",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300",
          "rounded-l-lg",
          "hover:px-4",
          "writing-mode-vertical",
          className
        )}
        aria-label="View partnership packages"
      >
        <Sparkles className="w-5 h-5 text-black" />
        <span className="whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          View Packages
        </span>
      </button>

      {/* Mobile Tab - Horizontal on Bottom */}
      <button
        onClick={onClick}
        className={cn(
          "md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-[100]",
          "flex items-center gap-2 px-6 py-3",
          "bg-gradient-to-r from-primary to-[#7dd3c0]",
          "text-black font-semibold text-sm",
          "shadow-lg",
          "transition-all duration-300",
          "rounded-t-lg",
          "w-auto",
          className
        )}
        aria-label="View partnership packages"
      >
        <Sparkles className="w-5 h-5 text-black" />
        <span className="whitespace-nowrap">View Packages</span>
      </button>
    </>
  );
};
