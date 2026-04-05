"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ProductEnquireModal } from "@/components/ProductEnquireModal";
import { ServicesTopCarousel } from "@/components/ServicesTopCarousel";

type ServiceItem = {
  id: string;
  title: string;
  desc: string;
  image: string;
  anchor: string;
};

type ServicesDetailsPanelProps = {
  services: ServiceItem[];
};

export function ServicesDetailsPanel({ services }: ServicesDetailsPanelProps) {
  const [selectedAnchor, setSelectedAnchor] = useState(services[0]?.anchor ?? "");

  const activeService = useMemo(
    () => services.find((service) => service.anchor === selectedAnchor) ?? services[0],
    [selectedAnchor, services],
  );

  if (!activeService) {
    return null;
  }

  return (
    <>
      <ServicesTopCarousel
        services={services.map(({ id, anchor, title, image }) => ({
          id,
          anchor,
          title,
          image,
        }))}
        selectedAnchor={activeService.anchor}
        onSelect={setSelectedAnchor}
      />

      <div className="py-7 sm:py-10 md:py-14 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch group bg-white shadow-md rounded-none overflow-hidden">
          <div className="lg:col-span-5 h-[220px] sm:h-[300px] lg:h-auto relative overflow-hidden">
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center p-5 sm:p-7 lg:p-12 space-y-4 sm:space-y-6 bg-white">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C2C2A] tracking-tight hover:text-[#639922] transition-colors duration-300">
                {activeService.title}
              </h3>
              <div className="w-16 h-1 bg-[#639922] rounded-full mt-4" />
            </div>
            <div className="text-gray-600 text-[15px] sm:text-base md:text-lg leading-7 md:leading-relaxed flex-grow space-y-3 sm:space-y-4">
              {activeService.desc.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div>
              <ProductEnquireModal productName={activeService.title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
