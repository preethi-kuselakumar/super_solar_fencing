import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import type { CatalogProduct } from "@/lib/types";

export function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group mx-auto flex h-full min-h-[290px] sm:min-h-[320px] w-full max-w-[340px] min-w-0 flex-col bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#639922]/30 transition-all duration-300 relative"
    >
      {product.offer && (
        <div className="absolute top-4 left-4 z-10 bg-[#639922] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded shadow">
          {product.offer}
        </div>
      )}
      
      <div className="h-40 sm:h-48 md:h-52 bg-gradient-to-br from-slate-50 to-slate-100/50 w-full flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-slate-100 transition-colors">
        {product.images && product.images.length > 0 ? (
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#639922]/[0.02] transition-opacity duration-300 pointer-events-none" />
            <Shield className="w-16 h-16 text-slate-300 group-hover:scale-110 group-hover:text-[#639922]/60 transition-transform duration-500 ease-out" />
          </>
        )}
      </div>

      <div className="p-3 sm:p-4 flex flex-1 flex-col gap-2.5">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#2C2C2A] mb-1 leading-snug break-words group-hover:text-[#639922] transition-colors line-clamp-2">
            {product.name}
          </h3>

          {product.price !== undefined && (
            <span className="font-bold text-lg text-[#639922] block">
              ₹{product.price.toFixed(2)}
            </span>
          )}
        </div>

        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-500 group-hover:text-[#639922] transition-colors w-full">
          <span className="uppercase tracking-[0.14em] text-xs leading-none">View Product</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
