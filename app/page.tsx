import Link from "next/link";
import Image from "next/image";
import { CardCarousel } from "@/components/ui/card-carousel";
import { Component as BlogPostsSection } from "@/components/ui/blog-posts";
import { getCatalogProducts, getCatalogServices } from "@/lib/catalogData";

export default async function Home() {
  const [services, products] = await Promise.all([
    getCatalogServices(),
    getCatalogProducts(),
  ]);

  const fallbackImages = [
    {
      src: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop",
      alt: "Solar Panels",
      href: "/services"
    },
    {
      src: "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg",
      alt: "Solar Power Systems",
      href: "/services"
    },
    {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
      alt: "Hydropower Plants",
      href: "/services"
    },
    {
      src: "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=800&auto=format&fit=crop",
      alt: "Maintenance Service",
      href: "/services"
    },
  ];

  const serviceCarouselImages = services.slice(0, 8).map((service, index) => {
    const fallback = fallbackImages[index % fallbackImages.length];
    const validSrc = service.image?.startsWith("http") ? service.image : fallback.src;

    return {
      src: validSrc,
      alt: service.title || fallback.alt,
      href: "/services",
    };
  });

  const carouselImages =
    serviceCarouselImages.length > 0 ? serviceCarouselImages : fallbackImages;

  const fallbackProductImages = [
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=1600&auto=format&fit=crop",
  ];

  const productSectionPosts = [
    {
      id: 1,
      title: "Solar Electric Shock Fence",
      category: "Solar Security",
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop",
      href: "/products",
      views: 1860,
      readTime: 6,
      rating: 5,
    },
    {
      id: 2,
      title: "Solar Power Fencing System",
      category: "Perimeter Safety",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
      href: "/products",
      views: 1490,
      readTime: 7,
      rating: 5,
    },
    {
      id: 3,
      title: "Agricultural Fencing Kit",
      category: "Farm Solutions",
      imageUrl: "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg",
      href: "/products",
      views: 1330,
      readTime: 5,
      rating: 4,
    }
  ];

  return (
    <>
      {/* Mobile-first hero with responsive media and clear CTA hierarchy */}
      <section className="relative min-h-[78vh] overflow-hidden bg-[#1F2924]">
        <Image
          src="https://i.ytimg.com/vi/e59oaLBmi64/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARKqzi0hlUZzV7Ucb0Oxelc-EiOA"
          alt="Solar energy field"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" />

        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-[1400px] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <p className="animate-fade-in-up text-[12px] font-bold uppercase tracking-[0.2em] text-[#9CCF63] sm:text-[13px]">
              Trusted Solar Protection
            </p>
            <h1 className="animate-fade-in-up delay-100 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Secure Perimeters With
              <br className="hidden sm:block" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9CCF63]">Smart Solar Fencing</span>
            </h1>
            <p className="animate-fade-in-up delay-200 max-w-2xl text-[15px] leading-7 text-gray-200 sm:text-base">
              Durable, low-maintenance fencing systems built for farms, factories,
              and open land with dependable solar-powered performance.
            </p>
            <div className="animate-fade-in-up delay-300 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/products"
                className="hover-electric-glow inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[#639922] px-6 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#547f1d]"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/20 hover:border-[#639922] hover:text-[#9CCF63]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-10 sm:py-14">
        <div className="max-w-[1200px] mx-auto">
          {/* Stats cards are horizontal on mobile and 3-column on larger screens */}
          <div className="mb-12 sm:mb-14">
            <div className="flex snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0">
            <div className="group min-w-[240px] snap-start rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:min-w-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#639922]/30">
              <p className="text-3xl font-extrabold text-[#639922] sm:text-4xl transition-colors duration-300 group-hover:text-[#547f1d]">50+</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-slate-600 sm:text-[12px] group-hover:text-[#639922] transition-colors duration-300">
                Happy Customers
              </p>
            </div>
            <div className="group min-w-[240px] snap-start rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:min-w-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#639922]/30 delay-100">
              <p className="text-3xl font-extrabold text-[#639922] sm:text-4xl transition-colors duration-300 group-hover:text-[#547f1d]">30+</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-slate-600 sm:text-[12px] group-hover:text-[#639922] transition-colors duration-300">
                Projects Completed
              </p>
            </div>
            <div className="group min-w-[240px] snap-start rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:min-w-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#639922]/30 delay-200">
              <p className="text-3xl font-extrabold text-[#639922] sm:text-4xl transition-colors duration-300 group-hover:text-[#547f1d]">10+</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-slate-600 sm:text-[12px] group-hover:text-[#639922] transition-colors duration-300">
                Product Lines
              </p>
            </div>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="mb-14 sm:mb-16">
            <CardCarousel
              images={carouselImages}
              autoplayDelay={3200}
              showPagination={true}
              showNavigation={false}
              showBadge={false}
              title="Service Highlights"
              subtitle="Seamless services carousel animation."
            />
          </div>

          {/* Products Section */}
          <BlogPostsSection
            title="Our Products"
            description="Explore premium solar fencing and protection systems built for long-term security, durability, and performance."
            backgroundLabel="PRODUCTS"
            backgroundPosition="right"
            posts={productSectionPosts}
            className="mb-14 mt-2 sm:mb-16"
          />

          {/* About section uses single-column first, then two-column on large screens */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8 sm:gap-10">
            <div className="relative order-2 hidden lg:order-1 lg:block">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-[#EDE8DE] sm:-left-4 sm:-top-4" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm">
                <Image 
                  src="https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg" 
                  alt="Installation of solar panels"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 space-y-4 lg:order-2 lg:space-y-5">
              <span className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#639922] sm:text-[13px]">
                About Us
              </span>
              <div className="relative lg:hidden">
                <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-[#EDE8DE]" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm">
                  <Image
                    src="https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg"
                    alt="Installation of solar panels"
                    fill
                    loading="lazy"
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2C2C2A] sm:text-4xl lg:text-5xl">
                Among The Top Solar &
                <br className="hidden sm:block" />
                Renewable Energy Teams
              </h2>
              <p className="max-w-xl text-[15px] leading-7 text-[#64748B] sm:text-base">
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet. Tempor erat sed stet lorem sit clita duo justo elitr rebum at clita diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[#639922] px-7 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#547f1d]"
                >
                  Find Out More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motive / Why Choose Us Section */}
      <section className="bg-[#F5F5F5] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 max-w-3xl sm:mb-12">
            <span className="mb-3 block text-[12px] font-bold uppercase tracking-[0.2em] text-[#639922] sm:text-[13px]">
              Why Choose Us!
            </span>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-[#2C2C2A] sm:text-4xl md:text-[44px]">
              Our Motive To Change World
            </h2>
            <p className="max-w-2xl text-[15px] leading-7 text-[#64748B] sm:text-base">
              Aliqu diam amet diam et dolor diam ipsum sit tet lorem sit clita duo eos. Clita erat ipsum et lorem et sit, sed tempor erat elitr rebum at clita.
            </p>
          </div>

          {/* Mobile-first responsive grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {[
              { num: "01", text: "Quality\nServices" },
              { num: "02", text: "Expert\nWorkers" },
              { num: "03", text: "Free\nConsulting" },
              { num: "04", text: "Customer\nSupport" }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative min-h-[126px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#639922]/40 active:scale-[0.98] sm:min-h-[138px] sm:p-4"
              >
                <span
                  className="pointer-events-none absolute left-2 top-0 text-[64px] leading-none font-black tracking-tighter text-slate-200 transition-all duration-300 group-hover:text-[#639922]/15 sm:left-3 sm:-top-1 sm:text-[80px]"
                >
                  {item.num}
                </span>
                <span className="relative z-10 block whitespace-pre-line pl-8 pt-3 text-[11px] font-bold uppercase leading-[1.45] tracking-[0.12em] text-[#2C2C2A] transition-colors duration-300 group-hover:text-[#639922] sm:pl-10 sm:pt-4 sm:text-[12px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}
