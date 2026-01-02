import { cn } from "@/lib/utils";

interface PackagesTooltipProps {
  isVisible: boolean;
}

export const PackagesTooltip = ({ isVisible }: PackagesTooltipProps) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Tooltip - Points to Right Side Tab */}
      <div
        className={cn(
          "hidden md:block fixed right-24 top-1/2 -translate-y-1/2 z-[99]",
          "animate-fade-in"
        )}
      >
        <div className="relative">
          {/* Speech Bubble with Tail */}
          <div className="relative bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-3 rounded-2xl shadow-2xl border-2 border-black dark:border-white">
            <p className="font-handwriting text-2xl whitespace-nowrap">
              Pssst... Over here!
            </p>

            {/* Speech Bubble Tail - pointing right */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6">
              <svg viewBox="0 0 20 20" className="w-full h-full">
                <path
                  d="M 0 10 Q 10 5, 20 10 Q 10 15, 0 10 Z"
                  fill="currentColor"
                  className="text-white dark:text-gray-800"
                />
                <path
                  d="M 0 10 Q 10 5, 20 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-black dark:text-white"
                />
                <path
                  d="M 0 10 Q 10 15, 20 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-black dark:text-white"
                />
              </svg>
            </div>
          </div>

          {/* Hand-drawn Arrow SVG pointing right */}
          <svg
            className="absolute -right-24 top-1/2 -translate-y-1/2 w-20 h-12"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Curved arrow path - hand-drawn style */}
            <path
              d="M 5 25 Q 30 15, 55 25 T 82 25"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              strokeLinejoin="round"
              className="text-black dark:text-white"
              style={{
                strokeDasharray: "3, 3",
                filter: "url(#handDrawn)"
              }}
            />
            {/* Arrow head */}
            <path
              d="M 82 25 L 75 20 M 82 25 L 75 30"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black dark:text-white"
            />
            {/* SVG filter for hand-drawn effect */}
            <defs>
              <filter id="handDrawn">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="turbulence" />
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Mobile Tooltip - Points to Bottom Tab */}
      <div
        className={cn(
          "md:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-[99]",
          "animate-fade-in"
        )}
      >
        <div className="relative flex flex-col items-center">
          {/* Speech Bubble with Tail */}
          <div className="relative bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-3 rounded-2xl shadow-2xl border-2 border-black dark:border-white">
            <p className="font-handwriting text-2xl whitespace-nowrap">
              Pssst... Over here!
            </p>

            {/* Speech Bubble Tail - pointing down */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6">
              <svg viewBox="0 0 20 20" className="w-full h-full">
                <path
                  d="M 10 0 Q 5 10, 10 20 Q 15 10, 10 0 Z"
                  fill="currentColor"
                  className="text-white dark:text-gray-800"
                />
                <path
                  d="M 10 0 Q 5 10, 10 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-black dark:text-white"
                />
                <path
                  d="M 10 0 Q 15 10, 10 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-black dark:text-white"
                />
              </svg>
            </div>
          </div>

          {/* Hand-drawn Arrow SVG pointing down */}
          <svg
            className="w-12 h-16 mt-3"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Curved arrow path - hand-drawn style */}
            <path
              d="M 25 5 Q 20 20, 25 38"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              strokeLinejoin="round"
              className="text-black dark:text-white"
              style={{
                strokeDasharray: "3, 3",
                filter: "url(#handDrawnMobile)"
              }}
            />
            {/* Arrow head */}
            <path
              d="M 25 38 L 20 31 M 25 38 L 30 31"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black dark:text-white"
            />
            {/* SVG filter for hand-drawn effect */}
            <defs>
              <filter id="handDrawnMobile">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="turbulence" />
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};
