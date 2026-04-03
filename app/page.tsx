import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, Sun, Shield } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { productData } from "@/lib/dummyData";
import { ServiceSection } from "@/components/ServiceSection";
import { ProductSection } from "@/components/ProductSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative flex min-h-[85vh] w-full items-center justify-start bg-[#1C1C1C] overflow-hidden"
        style={{
          backgroundImage: "url('https://i.ytimg.com/vi/e59oaLBmi64/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARKqzi0hlUZzV7Ucb0Oxelc-EiOA')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 z-10 w-full flex flex-col justify-center h-full">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-[75px] font-bold text-white leading-[1.15] tracking-tight">
              Top Solar and <br/> Renewable Energy
            </h1>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mt-4 mb-8">
              Vero elitr justo clita dolor at sed stet sit diam no. Kasd rebum ipsum et diam<br className="hidden md:block"/> justo clita et kasd rebum sea elitr.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block rounded-full bg-[#FF7A49] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#e66a3d] transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Slider Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center items-center space-x-3">
          <div className="h-1 w-10 bg-[#FF7A49] rounded-full"></div>
          <div className="h-1 w-10 bg-white/40 rounded-full cursor-pointer hover:bg-white/60 transition-colors"></div>
          <div className="h-1 w-10 bg-white/40 rounded-full cursor-pointer hover:bg-white/60 transition-colors"></div>
        </div>
      </section>

      {/* Stats & About Section */}
      <section className="bg-[#FAF7F2] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl font-extrabold text-[#FF7A49]">50+</span>
              <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl font-extrabold text-[#FF7A49]">30+</span>
              <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Project Done</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl font-extrabold text-[#FF7A49]">10+</span>
              <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Products</span>
            </div>
          </div>

          {/* About Content Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Image Side */}
            <div className="relative pl-6 pt-6">
              {/* Decorative offset box from the image (slightly lower and further left) */}
              <div className="absolute top-0 left-0 w-[95%] h-full bg-[#EFEBE4] z-0"></div>
              
              {/* Main Image Area */}
              <div className="relative z-10 w-full aspect-[4/3] shadow-sm bg-gray-200">
                <Image 
                  src="https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg" 
                  alt="Installation of solar panels"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Text Side */}
            <div className="space-y-6">
              <span className="text-[#FF7A49] font-bold text-[13px] tracking-widest uppercase mb-4 block">About Us</span>
              <h2 className="text-[40px] md:text-5xl font-extrabold text-[#1C2028] leading-[1.15] tracking-tight">
                Among The Top 10 Solar & <br className="hidden md:block" />
                Renewable Energy <br className="hidden md:block" />
                Industry
              </h2>
              <p className="text-[#969696] text-[15px] leading-relaxed max-w-lg mt-6">
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet. Tempor erat sed stet lorem sit clita duo justo elitr rebum at clita diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
              </p>
              <div className="pt-6">
                <Link
                  href="/about"
                  className="inline-block rounded-full bg-[#FF7A49] px-9 py-3.5 text-sm font-medium text-white hover:bg-[#e66a3d] transition-all"
                >
                  Find Out More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductSection />

      {/* Motive / Why Choose Us Section */}
      <section className="bg-[#FAF7F2] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Header Content */}
          <div className="max-w-3xl mb-16">
            <span className="text-[#FF7A49] font-bold text-[13px] tracking-[0.2em] uppercase mb-4 block">Why Choose Us!</span>
            <h2 className="text-[40px] md:text-[44px] font-extrabold text-[#1C2028] leading-[1.15] tracking-tight mb-6">
              Our Motive To Change World
            </h2>
            <p className="text-[#969696] text-[15px] leading-relaxed max-w-2xl">
              Aliqu diam amet diam et dolor diam ipsum sit tet lorem sit clita duo eos. Clita erat ipsum et lorem et sit, sed tempor erat elitr rebum at clita.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { num: "01", text: "Quality\nServices" },
              { num: "02", text: "Expert\nWorkers" },
              { num: "03", text: "Free\nConsulting" },
              { num: "04", text: "Customer\nSupport" }
            ].map((item, i) => (
              <div key={i} className="flex items-center group cursor-default">
                {/* Large Outline Number */}
                <span 
                  className="text-[85px] leading-none font-bold text-transparent tracking-tighter transition-all duration-300" 
                  style={{ WebkitTextStroke: '2px #E8DFD0' }}
                >
                  {item.num}
                </span>
                {/* Text Beside */}
                <span className="text-[#1C2028] font-bold text-[13px] tracking-widest uppercase whitespace-pre-line leading-[1.6] -ml-4 z-10 transition-colors duration-300 group-hover:text-[#FF7A49]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServiceSection />
    </>
  );
}
