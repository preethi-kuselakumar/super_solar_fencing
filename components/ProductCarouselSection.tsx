"use client";

import { CardCarousel } from "@/components/ui/card-carousel";
import { productData } from "@/lib/dummyData";

export function ProductCarouselSection() {
  // Extract images from product data
  const carouselImages = productData
    .filter(product => product.images && product.images.length > 0)
    .map(product => ({
      src: product.images[0],
      alt: product.name
    }));

  return (
    <section className="bg-[#F5F5F5] py-24 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <CardCarousel
          images={carouselImages}
          autoplayDelay={2000}
          showPagination={true}
          showNavigation={true}
        />
      </div>
    </section>
  );
}
