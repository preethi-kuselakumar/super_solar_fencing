"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SkeletonCard } from "@/components/SkeletonCard";
import type { CatalogProduct } from "@/lib/types";
import { Search } from "lucide-react";

type ProductsCatalogClientProps = {
  initialProducts: CatalogProduct[];
};

export default function ProductsCatalogClient({
  initialProducts,
}: ProductsCatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = initialProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.shortDescription || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      <PageHeader
        title="Our Products"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <div className="pt-16 pb-16">
        <SectionWrapper>
          <div className="mb-12 text-center md:text-left mx-auto md:mx-0 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-3xl">
              <span className="text-[#FF7A49] font-bold text-[13px] tracking-[0.15em] uppercase mb-4 block">
                Product Catalog
              </span>
              <p className="text-lg text-slate-600 leading-relaxed">
                Explore our comprehensive range of high-performance solar energizers,
                heavy-duty accessories, and complete kits designed for ultimate
                perimeter security and reliability.
              </p>
            </div>
            
            <div className="w-full md:w-80 relative">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#FF7A49] focus:border-[#FF7A49] sm:text-sm transition-colors"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
            {isLoading ? (
              Array(8)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  No products found
                </h3>
                <p className="text-slate-500">
                  We could not find any products matching "
                  <span className="font-semibold">{searchQuery}</span>".
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-6 px-6 py-2 bg-[#FF7A49] text-white rounded-full font-medium hover:bg-[#e66a3d] transition"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </SectionWrapper>
      </div>
    </main>
  );
}
