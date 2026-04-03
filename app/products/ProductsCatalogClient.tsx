"use client";

import { useEffect, useState } from "react";

import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SkeletonCard } from "@/components/SkeletonCard";
import type { CatalogProduct } from "@/lib/types";

type ProductsCatalogClientProps = {
  initialProducts: CatalogProduct[];
  categories: string[];
};

export default function ProductsCatalogClient({
  initialProducts,
  categories,
}: ProductsCatalogClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const handleCategorySelect = (category: string) => {
    setIsLoading(true);
    setActiveCategory(category);
  };

  // Keep the existing loading UX while data remains server-sourced.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredProducts =
    activeCategory === "All"
      ? initialProducts
      : initialProducts.filter((product) => product.category === activeCategory);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50">
      <SectionWrapper>
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-emerald-600">Products</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Explore our comprehensive range of high-performance solar energizers,
            heavy-duty accessories, and complete kits designed for ultimate
            perimeter security and reliability.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelect={handleCategorySelect}
        />

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
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-slate-300">📦</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No products found
              </h3>
              <p className="text-slate-500">
                We could not find any products in the{" "}
                <span className="font-semibold">{activeCategory}</span>
                {" "}category.
              </p>
              <button
                onClick={() => handleCategorySelect("All")}
                className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
}
