"use client";

import { useState } from "react";
import { Maximize2, X } from "lucide-react";

import { SectionWrapper } from "@/components/SectionWrapper";
import type { CatalogProject } from "@/lib/types";

type WorksGalleryClientProps = {
  projects: CatalogProject[];
};

export default function WorksGalleryClient({ projects }: WorksGalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-emerald-600">Formidable Projects</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Take a look at some of our successful installations securing
            perimeters across agricultural lands, industrial complexes, and
            residential estates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-4/3 bg-slate-200 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="absolute inset-0 bg-linear-to-br from-emerald-100/50 to-slate-200/50 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-700">
                <span className="text-5xl mb-2 opacity-50">🏗️</span>
                <span className="font-mono text-sm tracking-widest uppercase opacity-50">
                  {project.category}
                </span>
              </div>

              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Maximize2 className="absolute top-6 right-6 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500" />
                <span className="text-emerald-400 font-semibold text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {selectedImage && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4">
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
            <span className="text-6xl opacity-30">📸 Placeholder Image</span>
          </div>
        </div>
      )}
    </main>
  );
}
