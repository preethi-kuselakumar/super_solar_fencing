"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, SparklesIcon } from "lucide-react";
import Link from "next/link";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import { Badge } from "@/components/ui/badge";

interface CarouselProps {
  images: { src: string; alt: string; href?: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
  showBadge?: boolean;
  badgeLabel?: string;
  title?: string;
  subtitle?: string;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
  showBadge = true,
  badgeLabel = "Latest Products",
  title = "Product Highlights",
  subtitle = "Seamless product carousel animation.",
}) => {
  const normalizedImages = images.filter(
    (image): image is { src: string; alt: string; href?: string } => Boolean(image?.src)
  );

  const repeatedImages =
    normalizedImages.length === 0
      ? []
      : Array.from(
          { length: Math.max(12, normalizedImages.length * 3) },
          (_, index) => normalizedImages[index % normalizedImages.length],
        );

  if (repeatedImages.length === 0) {
    return null;
  }

  const stepDurationMs = 620;

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) {
      return;
    }

    const stepIntervalMs = Math.max(1000, Math.min(autoplayDelay, 2000));

    const timer = setInterval(() => {
      if (!swiperRef.current || swiperRef.current.destroyed) {
        return;
      }

      const current = swiperRef.current;
      const lastIndex = current.slides.length - 1;

      if (current.activeIndex >= lastIndex) {
        current.slideTo(0, stepDurationMs, false);
      } else {
        current.slideNext(stepDurationMs, false);
      }
    }, stepIntervalMs);

    return () => clearInterval(timer);
  }, [autoplayDelay, repeatedImages.length]);

  const css = `
  .swiper {
    width: 100%;
    padding: 16px 8px 52px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 260px;
    height: 340px;
  }

  @media (min-width: 768px) {
    .swiper {
      padding: 16px 0 52px;
    }

    .swiper-slide {
      width: 320px;
      height: 420px;
    }
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right {
    background: none;
  }

  .swiper-pagination-bullet {
    background: #94a3b8;
    opacity: 0.55;
  }

  .swiper-pagination-bullet-active {
    background: #639922;
    opacity: 1;
  }

  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
  `;

  return (
    <section className="relative w-full py-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-none">
        <div className="relative mx-auto flex w-full flex-col px-4 py-2 md:px-6 md:py-2">
          {showBadge && (
            <Badge
              variant="outline"
              className="absolute left-4 top-5 rounded-[14px] border border-black/10 bg-white/80 text-base backdrop-blur md:left-6"
            >
              <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />
              <span className="ml-1">{badgeLabel}</span>
            </Badge>
          )}

          <div
            className={`flex flex-col justify-center pb-2 pl-4 ${
              showBadge ? "pt-14" : "pt-6"
            } md:items-center`}
          >
            <div className="flex items-center justify-between gap-3 md:min-w-[520px]">
              <div>
                <h3 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl">
                  {title}
                </h3>
                <p className="text-[#334155] font-medium md:text-lg">{subtitle}</p>
              </div>
              {showNavigation && (
                <div className="hidden items-center gap-2 md:flex">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    className="swiper-button-prev !static flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-transparent text-slate-700 transition hover:border-[#639922] hover:text-[#639922]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    className="swiper-button-next !static flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-transparent text-slate-700 transition hover:border-[#639922] hover:text-[#639922]"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={16}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                speed={stepDurationMs}
                slidesPerView={1.08}
                breakpoints={{
                  640: { slidesPerView: 2.1, spaceBetween: 20 },
                  1024: { slidesPerView: 3.1 },
                  1280: { slidesPerView: 4.1 },
                }}
                touchRatio={1.15}
                resistanceRatio={0.9}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 12,
                  depth: 100,
                  modifier: 1.1,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                watchSlidesProgress={true}
                onSwiper={(instance) => {
                  swiperRef.current = instance;
                }}
                onReachEnd={(instance) => {
                  // Restart from first slide immediately to keep an endless cycle.
                  instance.slideTo(0, 0, false);
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
              >
                {repeatedImages.map((image, index) => (
                  <SwiperSlide key={`slide-${index}-${image.alt}`}>
                    {image.href ? (
                      <Link href={image.href} className="block size-full overflow-hidden relative group cursor-pointer">
                        <img
                          src={image.src}
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                          alt={image.alt}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-bold tracking-widest uppercase text-sm border-b-2 border-[#639922] pb-1">View Service</span>
                        </div>
                      </Link>
                    ) : (
                      <div className="size-full overflow-hidden relative group">
                        <img
                          src={image.src}
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                          alt={image.alt}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};