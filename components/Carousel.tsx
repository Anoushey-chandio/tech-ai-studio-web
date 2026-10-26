"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  label: string;
  children: ReactNode;
};

export default function Carousel({ label, children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  const arrow =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-md transition hover:bg-black hover:text-white";

  return (
    <div role="region" aria-label={label}>
      <div className="mb-4 hidden justify-center gap-3 sm:flex">
        <button type="button" className={arrow} aria-label="Previous videos" onClick={() => scroll(-1)}>
          <ChevronLeft size={22} />
        </button>
        <button type="button" className={arrow} aria-label="Next videos" onClick={() => scroll(1)}>
          <ChevronRight size={22} />
        </button>
      </div>
      <div
        ref={trackRef}
        className="carousel-track -mx-5 flex gap-6 overflow-x-auto scroll-px-5 px-5 pb-6 pt-1 sm:mx-0 sm:scroll-px-1 sm:px-1"
      >
        {children}
      </div>
    </div>
  );
}
