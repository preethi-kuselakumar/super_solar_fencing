"use client";

import Image from "next/image";
import Link from "next/link";
import { productData } from "@/lib/dummyData";

export function ProductSection() {
  return (
    <section className="bg-[#FAF7F2] py-24 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#FF7A49] font-bold text-[13px] tracking-[0.15em] uppercase mb-4 block">Our Products</span>
          <h2 className="text-[40px] md:text-[46px] font-extrabold text-[#1C2028] leading-[1.15] tracking-tight">
            View Our High-Quality <br /> Solar Products
          </h2>
        </div>

        {/* Products Grid Container */}
        <div className="relative w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: unknown }) {
  // Use a sensible default if the image is just a placeholder path without actual image
  const defaultImage = "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop";
  const imageSrc = product.images?.[0] && product.images[0] !== "/placeholder.jpg" 
    ? product.images[0] 
    : defaultImage;

  return (
    <div className="flex flex-col group w-full bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Media Container */}
      <div className="relative w-full h-[240px] overflow-hidden bg-gray-100">
        <Image 
          src={imageSrc} 
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-[#FF7A49] text-white text-sm font-bold px-3 py-1 rounded-full shadow-md z-10">
          ${product.price}
        </div>
      </div>

      {/* Text Info */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-[#FF7A49] font-bold text-[11px] tracking-[0.15em] uppercase mb-2 block transition-colors group-hover:text-[#e66a3d]">
          {product.category}
        </span>
        <h3 className="text-[20px] font-bold text-[#1C2028] tracking-tight group-hover:text-[#FF7A49] transition-colors leading-snug mb-3">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
          {product.shortDescription}
        </p>
        
        <Link href={`/products`} className="mt-auto flex items-center text-[#FF7A49] font-semibold text-sm hover:text-[#e66a3d] transition-colors">
          View Details
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
