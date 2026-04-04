"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

type VideoItem = {
  title: string;
  videoId: string;
  thumbnail: string;
};

type AboutProductVideosProps = {
  videos: VideoItem[];
};

function getEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&loop=0&rel=0&modestbranding=1`;
}

export function AboutProductVideos({ videos }: AboutProductVideosProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const displayVideos = videos.slice(0, 3);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-1">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[0.06em] uppercase leading-[0.95] bg-gradient-to-r from-[#639922] via-[#2C2C2A] to-[#639922] bg-clip-text text-transparent drop-shadow-sm">
          VISIT US ON YOUTUBE
        </h3>
        <Link href="https://www.youtube.com/" target="_blank" className="text-[#639922] font-bold hover:underline">
          View All
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {displayVideos.map((video, index) => (
          <div key={`${video.videoId}-${video.title}-${index}`} className="group">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-black">
              {isInView ? (
                <iframe
                  src={getEmbedUrl(video.videoId)}
                  title={video.title}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
                      <Play className="w-10 h-10 text-[#639922] ml-1" fill="currentColor" />
                    </span>
                  </div>
                </>
              )}
            </div>

            <p className="font-bold text-[#2C2C2A] mt-4 mb-3 text-lg sm:text-xl leading-tight">{video.title}</p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#639922] text-white px-6 py-2.5 rounded-md font-bold hover:bg-[#5F5E5A] transition"
            >
              Get Quote
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
