"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SkeletonCard } from "@/components/SkeletonCard";
import type { CatalogProduct } from "@/lib/types";
import { Search } from "lucide-react";

type ProductsCatalogClientProps = {
  initialProducts: CatalogProduct[];
};

type CategorySectionData = {
  products: CatalogProduct[];
  shortDescription: string;
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

  const productsByCategory = filteredProducts.reduce<Record<string, CategorySectionData>>(
    (acc, product) => {
      const category = product.category?.trim() || "Uncategorized";
      if (!acc[category]) {
        acc[category] = {
          products: [],
          shortDescription: product.categoryShortDescription?.trim() || "",
        };
      }

      if (!acc[category].shortDescription && product.categoryShortDescription?.trim()) {
        acc[category].shortDescription = product.categoryShortDescription.trim();
      }

      acc[category].products.push(product);
      return acc;
    },
    {},
  );

  const orderedCategories = Object.keys(productsByCategory).sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <main className="bg-[#F5F5F5] min-h-screen overflow-x-clip">
      <div className="pt-2 md:pt-4 pb-10 md:pb-16">
        <SectionWrapper className="px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="mb-8 md:mb-12 text-left mx-auto md:mx-0 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 w-full">
            <div className="max-w-3xl w-full min-w-0">
              <h1 className="text-[30px] md:text-4xl font-extrabold text-[#2C2C2A] tracking-tight mb-3 leading-tight break-words">
                Product Catalog
              </h1>
              <p className="text-[#5F5E5A] text-[15px] leading-relaxed max-w-2xl break-words">
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
                className="block w-full min-h-[44px] pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#5F5E5A] focus:border-[#639922] sm:text-sm transition-colors"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6">
              {Array(8)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="mt-6 md:mt-8 space-y-10 md:space-y-12 pb-3 md:pb-0">
              {orderedCategories.map((category) => {
                const categorySection = productsByCategory[category];

                return (
                  <section key={category} className="scroll-mt-24">
                    <div className="mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-1 sm:gap-4">
                      <div>
                        <h2 className="text-[22px] md:text-2xl font-extrabold text-[#2C2C2A] tracking-tight leading-tight break-words">
                          {category}
                        </h2>
                        {categorySection.shortDescription && (
                          <p className="mt-1 text-[14px] text-slate-600 leading-relaxed max-w-3xl">
                            {categorySection.shortDescription}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-slate-500">
                        {categorySection.products.length} product{categorySection.products.length !== 1 ? "s" : ""}
                      </span>
                    </div>

                    <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-2">
                      <div className="flex gap-4 sm:gap-6 w-max">
                        {categorySection.products.map((product) => (
                          <div key={product.id} className="w-[260px] sm:w-[280px] md:w-[300px] shrink-0 snap-start">
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No products found
              </h3>
              <p className="text-slate-500">
                We could not find any products matching &quot;
                <span className="font-semibold">{searchQuery}</span>&quot;.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 min-h-[44px] px-6 py-2 bg-[#639922] text-white rounded-full font-medium hover:bg-[#e66a3d] transition"
              >
                Clear Search
              </button>
            </div>
          )}
        </SectionWrapper>
      </div>
    </main>
  );
}
