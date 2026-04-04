"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, MousePointer2 } from "lucide-react";

export const projectsData = [
  {
    id: 1,
    title: "Houston Roof Solaring",
    category: "ENERGY",
    image: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "City Solar Light",
    category: "RENEWABLE",
    // Example Youtube video link. Since no thumbnail is easily grabable, we just render a black block with play button or custom bg.
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 3,
    title: "Solar Power House",
    category: "ENERGY",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Rooftop Solaring",
    category: "RENEWABLE",
    videoUrl: "https://www.youtube.com/embed/xrqUsV0uLOM",
  },
  {
    id: 5,
    title: "Adjustment Solaring",
    category: "ENERGY",
    image: "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Wind Turbining",
    category: "WIND TURBINES",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Eco Factory Power",
    category: "FACTORY",
    image: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Desert Solar Panels",
    category: "COMMERCIAL",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 9,
    title: "Urban Eco Solutions",
    category: "ENERGY",
    image: "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=800&auto=format&fit=crop",
  }
];

export function ProjectSection({ isHomepage = true }: { isHomepage?: boolean }) {
  // If it's the homepage, show exactly 6 items max at a time before needing to scroll the box.
  const displayProjects = projectsData; // In real app, might slice based on need

  return (
    <section className="bg-[#FAF7F2] pb-24 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#FF7A49] font-bold text-[13px] tracking-[0.15em] uppercase mb-4 block">Our Projects</span>
          <h2 className="text-[40px] md:text-[46px] font-extrabold text-[#1C2028] leading-[1.15] tracking-tight">
            View Our Formidable <br /> Solar Projects
          </h2>
        </div>

        {/* Projects Grid Container with UP/DOWN scroll if needed */}
        <div className="relative w-full group/scroll pb-16">
          <div 
            className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 
            ${isHomepage ? "max-h-[600px] overflow-y-auto no-scrollbar scroll-smooth pr-2" : ""}`}
            style={isHomepage ? { scrollbarWidth: "none", msOverflowStyle: "none" } : undefined}
          >
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Optional bottom fade/scroll indicator when scrolling is available vertically */}
          {isHomepage && displayProjects.length > 6 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-70 flex flex-col items-center justify-center animate-bounce pointer-events-none">
              <span className="text-[11px] font-bold tracking-widest text-[#FF7A49] uppercase mb-1">Scroll Down</span>
              <MousePointer2 className="w-5 h-5 text-[#FF7A49]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: unknown }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col group w-full select-none pb-4">
      {/* Media Container */}
      <div className="relative w-full aspect-[3/2] mb-5 overflow-hidden bg-gray-900 pointer-events-auto z-10 rounded-sm">
        {project.videoUrl && isPlaying ? (
          <iframe 
            src={`${project.videoUrl}?autoplay=1&mute=0`} 
            allow="autoplay; encrypted-media; picture-in-picture" 
            allowFullScreen
            className="absolute inset-0 w-full h-full border-none"
          />
        ) : (
          <>
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              />
            ) : (
              // Black fallback for video without image thumbnail
              <div className="absolute inset-0 bg-[#2b2b2b]" />
            )}
            
            {project.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 bg-[#FF7A49] hover:bg-[#e66a3d] rounded-full flex items-center justify-center transition-all scale-90 group-hover:scale-100 shadow-xl cursor-pointer z-20 pointer-events-auto"
                >
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Text Info */}
      <div className="flex flex-col px-1 pointer-events-none">
        <span className="text-[#FF7A49] font-bold text-[11px] tracking-[0.15em] uppercase mb-2 block transition-colors group-hover:text-[#e66a3d]">
          {project.category}
        </span>
        <h3 className="text-[22px] font-bold text-[#1C2028] tracking-tight group-hover:text-[#FF7A49] transition-colors leading-snug">
          {project.title}
        </h3>
      </div>
    </div>
  );
}