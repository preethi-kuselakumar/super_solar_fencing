"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ServicePill = {
  id: string;
  anchor: string;
  title: string;
  image: string;
};

type ServicesTopCarouselProps = {
  services: ServicePill[];
  selectedAnchor?: string;
  onSelect?: (anchor: string) => void;
};

export function ServicesTopCarousel({
  services,
  selectedAnchor,
  onSelect,
}: ServicesTopCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollByAmount = (direction: "left" | "right") => {
    const container = trackRef.current;
    if (!container) return;

    const amount = direction === "right" ? 320 : -320;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = trackRef.current;
    if (!container || services.length <= 1) return;

    let animationFrameId = 0;
    let virtualScrollLeft = container.scrollLeft;
    let lastTimestamp = 0;
    const speedPxPerSecond = 12;

    const animate = (timestamp: number) => {
      const loopWidth = container.scrollWidth / 2;

      if (!isPaused && loopWidth > 0) {
        if (lastTimestamp === 0) {
          lastTimestamp = timestamp;
        }

        const deltaSeconds = (timestamp - lastTimestamp) / 1000;
        lastTimestamp = timestamp;

        virtualScrollLeft += speedPxPerSecond * deltaSeconds;

        if (virtualScrollLeft >= loopWidth) {
          virtualScrollLeft -= loopWidth;
        }

        container.scrollLeft = virtualScrollLeft;
      } else {
        lastTimestamp = timestamp;
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, services.length]);

  const loopedServices = [...services, ...services];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByAmount("left")}
        className="hidden md:flex absolute -left-3 top-8 z-20 w-10 h-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#639922] hover:border-[#639922] shadow-sm transition-colors"
        aria-label="Scroll services left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => scrollByAmount("right")}
        className="hidden md:flex absolute -right-3 top-8 z-20 w-10 h-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#639922] hover:border-[#639922] shadow-sm transition-colors"
        aria-label="Scroll services right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex min-w-max gap-5 md:gap-8 px-1">
          {loopedServices.map((service, index) => (
            <button
              type="button"
              key={`service-pill-${service.id}-${index}`}
              onClick={() => onSelect?.(service.anchor)}
              className="group w-[132px] sm:w-[148px] md:w-[160px] shrink-0 text-center"
            >
              <div
                className={`relative mx-auto h-24 w-24 sm:h-[108px] sm:w-[108px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden ring-2 transition-colors shadow-sm ${
                  selectedAnchor === service.anchor
                    ? "ring-[#639922]"
                    : "ring-slate-200 group-hover:ring-[#639922]"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p
                className={`mt-2 text-[13px] sm:text-[14px] md:text-[15px] leading-tight font-semibold transition-colors line-clamp-2 ${
                  selectedAnchor === service.anchor
                    ? "text-[#639922]"
                    : "text-[#2C2C2A] group-hover:text-[#639922]"
                }`}
              >
                {service.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}