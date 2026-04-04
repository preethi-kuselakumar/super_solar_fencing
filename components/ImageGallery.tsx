"use client";
import { useState } from "react";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageGallery({ images }: { images: string[] }) {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <div className="space-y-6">
      <div className="aspect-square bg-white shadow-sm border border-slate-200 rounded-2xl overflow-hidden flex items-center justify-center transition-all">
        {/* Placeholder logic representing images */}
        <Shield className="w-32 h-32 text-slate-200" />
      </div>
      
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((_img, i) => (
             <button
              key={i}
              onClick={() => setMainIndex(i)}
               className={cn(
                 "aspect-square rounded-xl bg-white border-2 flex items-center justify-center transition-all overflow-hidden",
                 mainIndex === i 
                  ? "border-emerald-600 shadow-md shadow-emerald-500/20" 
                  : "border-slate-200 hover:border-emerald-300 hover:bg-slate-50"
               )}
             >
               <Shield className={cn(
                 "transition-colors",
                 mainIndex === i ? "text-[#639922] w-10 h-10" : "text-slate-300 w-8 h-8"
               )} />
             </button>
          ))}
        </div>
      )}
    </div>
  );
}
