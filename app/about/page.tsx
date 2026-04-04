import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Zap, Sun, Shield } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} 
      />

      {/* Our Expertise (Based on Home Page About) */}
      <section className="bg-[#FAF7F2] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Side */}
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-[#FF7A49] font-bold text-[13px] tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-[36px] md:text-[44px] font-extrabold text-[#1C2028] leading-[1.15] tracking-tight">
              Pioneering the Future <br className="hidden md:block" />
              of Clean Energy & <br className="hidden md:block" />
              Security
            </h2>
            <p className="text-[#969696] text-[15px] leading-relaxed max-w-lg mt-6 mb-6">
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet. Tempor erat sed stet lorem sit clita duo justo elitr rebum at clita diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.
            </p>
            <p className="text-[#969696] text-[15px] leading-relaxed max-w-lg mb-8">
              Tempor erat sed stet lorem sit clita duo justo elitr rebum at clita diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-[#FF7A49]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-[18px] font-bold text-[#1C2028]">Verified Quality</h4>
                <p className="text-[#969696] text-[14px]">Certified by Top Industry Standards</p>
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative pl-6 pt-6 order-1 lg:order-2">
            <div className="absolute top-0 left-0 w-[95%] h-full bg-[#EFEBE4] z-0"></div>
            <div className="relative z-10 w-full aspect-[4/3] shadow-sm bg-gray-200">
              <Image 
                src="https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg" 
                alt="Installation of solar panels"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Innovative Approaches Section (Based on Home Page Motive) */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-[#EAE6DF]">
        <div className="max-w-[1200px] mx-auto">
          {/* Header Content */}
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-[#FF7A49] font-bold text-[13px] tracking-[0.2em] uppercase mb-4 block">Innovative Approaches</span>
            <h2 className="text-[36px] md:text-[44px] font-extrabold text-[#1C2028] leading-[1.15] tracking-tight mb-6">
              Our Solutions to Global Challenges
            </h2>
            <p className="text-[#969696] text-[15px] leading-relaxed max-w-2xl mx-auto">
              Aliqu diam amet diam et dolor diam ipsum sit tet lorem sit clita duo eos. Clita erat ipsum et lorem et sit, sed tempor erat elitr rebum at clita.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Approach 1 */}
            <div className="bg-[#FAF7F2] p-10 rounded-sm border border-[#EAE6DF] hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#FF7A49] mb-6 shadow-sm group-hover:bg-[#FF7A49] group-hover:text-white transition-colors">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-[#1C2028] font-bold text-[22px] mb-4">Solar Advancements</h3>
              <p className="text-[#969696] text-[15px] leading-relaxed">
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
              </p>
            </div>

            {/* Approach 2 */}
            <div className="bg-[#FAF7F2] p-10 rounded-sm border border-[#EAE6DF] hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#FF7A49] mb-6 shadow-sm group-hover:bg-[#FF7A49] group-hover:text-white transition-colors">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-[#1C2028] font-bold text-[22px] mb-4">Smart Energizers</h3>
              <p className="text-[#969696] text-[15px] leading-relaxed">
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
              </p>
            </div>

            {/* Approach 3 */}
            <div className="bg-[#FAF7F2] p-10 rounded-sm border border-[#EAE6DF] hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#FF7A49] mb-6 shadow-sm group-hover:bg-[#FF7A49] group-hover:text-white transition-colors">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-[#1C2028] font-bold text-[22px] mb-4">Perimeter Safety</h3>
              <p className="text-[#969696] text-[15px] leading-relaxed">
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
