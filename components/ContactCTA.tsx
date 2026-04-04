"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="bg-[#EAE6DF] py-10 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Content Area */}
          <div className="text-center lg:text-left">
            <h2 className="text-[32px] md:text-[40px] text-[#2C2C2A] mb-3 font-medium tracking-tight">
              Get a <span className="font-extrabold text-[#2C2C2A]">Free Quote</span> or get in <span className="font-extrabold text-[#2C2C2A]">Touch!</span>
            </h2>
            <p className="text-[#969696] text-[16px] md:text-[18px]">
              We have many options to reach us.
            </p>
          </div>

          {/* Right Button Area */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="mailto:contact@yourinfo.com"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#639922] bg-transparent hover:bg-[#639922] text-[#639922] hover:text-white px-8 py-3 text-[13px] font-bold tracking-widest uppercase transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Email
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#639922] bg-transparent hover:bg-[#639922] text-[#639922] hover:text-white px-8 py-3 text-[13px] font-bold tracking-widest uppercase transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Message
            </Link>
            
            <Link 
              href="tel:+111222333444"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#639922] bg-[#639922] hover:bg-[#e66a3d] hover:border-[#e66a3d] text-white px-8 py-3 text-[13px] font-bold tracking-widest uppercase transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}