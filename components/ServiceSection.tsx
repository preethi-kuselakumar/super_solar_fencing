"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// Placeholder dummy service data
const serviceData = [
  {
    id: 1,
    title: "Solar Panels",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop",
    link: "/products"
  },
  {
    id: 2,
    title: "Solar Power Systems",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image: "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg",
    link: "/products"
  },
  {
    id: 3,
    title: "Hydropower Plants",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    link: "/products"
  },
  {
    id: 4,
    title: "Wind Turbines",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    link: "/products"
  },
  {
    id: 5,
    title: "Maintenance Service",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=800&auto=format&fit=crop",
    link: "/products"
  },
  {
    id: 6,
    title: "Battery Storage",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop",
    link: "/products"
  },
  {
    id: 7,
    title: "Eco Consulting",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image: "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg",
    link: "/products"
  },
  {
    id: 8,
    title: "Installation Setup",
    desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    link: "/products"
  }
];

type ServiceItem = (typeof serviceData)[number];

export function ServiceSection() {
  const isSlider = serviceData.length > 4;

  return (
    <section className="bg-[#FAF7F2] pb-24 h-full w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 px-4">
        <span className="text-[#FF7A49] font-bold text-[13px] tracking-widest uppercase mb-4 block">Our Services</span>
        <h2 className="text-[40px] md:text-5xl font-extrabold text-[#1C2028] leading-[1.15] tracking-tight">
          Best Services <br /> From Us
        </h2>
      </div>

      {/* Grid or Slider Configuration */}
      <div className="relative w-full overflow-hidden">
        {isSlider ? (
          <div className="relative group/slider w-full">
            <Swiper
              modules={[Navigation, Pagination, FreeMode]}
              freeMode={{ enabled: true, sticky: false }}
              grabCursor={true}
              touchEventsTarget="container"
              allowTouchMove={true}
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              navigation={{
                nextEl: '.swiper-next-btn',
                prevEl: '.swiper-prev-btn',
              }}
              className="w-full"
            >
              {serviceData.map((service) => (
                <SwiperSlide key={service.id}>
                  <ServiceCard service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation buttons */}
            <button className="swiper-prev-btn absolute top-1/2 left-4 z-10 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#FF7A49] backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 pointer-events-auto">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-next-btn absolute top-1/2 right-4 z-10 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-[#FF7A49] backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 pointer-events-auto">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="group relative h-[450px] w-full overflow-hidden cursor-pointer">
      {/* Background Image */}
      <Image 
        src={service.image} 
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Primary Dark Overlay (Default State) */}
      <div className="absolute inset-0 bg-[#1C2028]/60 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />

      {/* Primary Orange Overlay (Hover State) */}
      <div className="absolute inset-0 bg-[#FF7A49]/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 pointer-events-none">
        <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{service.title}</h3>
        <p className="text-white/80 text-[15px] leading-relaxed mb-6">
          {service.desc}
        </p>
        <div className="pointer-events-auto w-max">
          <Link 
            href={service.link}
            className="inline-flex items-center text-[13px] font-bold tracking-widest uppercase text-white hover:text-white transition-colors gap-2 group/link"
          >
            Read More 
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}