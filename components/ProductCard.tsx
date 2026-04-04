import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import type { CatalogProduct } from "@/lib/types";

export function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#FF7A49]/30 transition-all duration-300 h-full relative"
    >
      {product.offer && (
        <div className="absolute top-4 left-4 z-10 bg-[#FF7A49] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded shadow">
          {product.offer}
        </div>
      )}
      
      <div className="h-60 bg-gradient-to-br from-slate-50 to-slate-100/50 w-full flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-slate-100 transition-colors">
        {product.images && product.images.length > 0 ? (
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#FF7A49]/[0.02] transition-opacity duration-300 pointer-events-none" />
            <Shield className="w-16 h-16 text-slate-300 group-hover:scale-110 group-hover:text-[#FF7A49]/60 transition-transform duration-500 ease-out" />
          </>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-end items-start mb-4">
          {product.price !== undefined && (
            <span className="font-bold text-lg text-[#1C2028]">₹{product.price.toFixed(2)}</span>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-[#1C2028] mb-3 leading-tight group-hover:text-[#FF7A49] transition-colors">
          {product.name}
        </h3>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
          {product.shortDescription || product.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-500 group-hover:text-[#FF7A49] transition-colors">
          <span className="uppercase tracking-wider text-xs">View Specifications</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
