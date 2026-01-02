"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ParallaxItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  left: number;
  top: number;
  speed: number;
};

const items: ParallaxItem[] = [
  { src: "/graphics/aiw/rabbit.png", alt: "Rabbit", width: 160, height: 200, left: 948, top: -40, speed: -0.12 },
  { src: "/graphics/aiw/watch.png", alt: "Watch", width: 140, height: 140, left: 982, top: 257, speed: -0.08 },
  { src: "/graphics/aiw/Teacup.png", alt: "Teacup", width: 140, height: 120, left: 1331, top: 333, speed: -0.06 },
  { src: "/graphics/aiw/teacup-2.png", alt: "Teacup 2", width: 120, height: 100, left: 760, top: 103, speed: -0.05 },
  { src: "/graphics/aiw/ace-spades.png", alt: "Ace Spades", width: 100, height: 120, left: 600, top: 3, speed: -0.07 },
  { src: "/graphics/aiw/Ace-hearts.png", alt: "Ace Hearts", width: 100, height: 120, left: 1130, top: -127, speed: -0.09 },
];

export function ParallaxGraphics() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY || 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none will-change-transform overflow-hidden">
      {items.map((item) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="absolute"
          style={{
            left: `${item.left}px`,
            top: `${item.top}px`,
            transform: `translateY(${offset * item.speed}px)`,
          }}
          priority
        />
      ))}
    </div>
  );
}
