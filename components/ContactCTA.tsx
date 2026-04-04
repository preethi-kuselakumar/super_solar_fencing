"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="w-full overflow-hidden bg-[#EAE6DF] py-6 sm:py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Mobile-first content stack with center alignment */}
          <div className="text-center">
            <h2 className="mb-3 text-[28px] font-semibold tracking-tight text-[#2C2C2A] sm:text-[34px] md:text-[38px]">
              Get a <span className="font-extrabold text-[#2C2C2A]">Free Quote</span> or get in <span className="font-extrabold text-[#2C2C2A]">Touch!</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-7 text-[#64748B] sm:text-[16px]">
              We have many options to reach us.
            </p>
          </div>

          {/* Buttons: mobile = stacked, tablet/desktop = Email+Message side by side, Call Now below */}
          <div className="mx-auto mt-6 flex w-full max-w-sm flex-col space-y-3 sm:mt-7 sm:hidden">
            <Link
              href="mailto:contact@yourinfo.com"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-transparent px-4 text-[12px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
            >
              <Mail className="h-4 w-4 shrink-0" />
              Email
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-transparent px-4 text-[12px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Message
            </Link>

            <Link
              href="tel:+111222333444"
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-[#639922] px-4 text-[13px] font-extrabold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:border-[#547f1d] hover:bg-[#547f1d] active:scale-[0.99]"
            >
              <Phone className="h-4 w-4 shrink-0" />
              Call Now
            </Link>
          </div>

          {/* Tablet/Desktop button arrangement */}
          <div className="mx-auto mt-6 hidden w-full max-w-2xl grid-cols-2 gap-4 sm:grid">
            <div className="col-span-2 flex justify-center gap-4">
              <Link
                href="mailto:contact@yourinfo.com"
                className="inline-flex min-h-[44px] w-full max-w-[220px] items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-transparent px-4 text-[12px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
              >
                <Mail className="h-4 w-4 shrink-0" />
                Email
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] w-full max-w-[220px] items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-transparent px-4 text-[12px] font-bold uppercase tracking-widest text-[#639922] transition-all duration-300 hover:bg-[#639922] hover:text-white active:scale-[0.99]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                Message
              </Link>
            </div>
            <div className="col-span-2 flex justify-center pt-1">
              <Link
                href="tel:+111222333444"
                className="inline-flex min-h-[46px] w-full max-w-[280px] items-center justify-center gap-2.5 rounded-full border-2 border-[#639922] bg-[#639922] px-4 text-[13px] font-extrabold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:border-[#547f1d] hover:bg-[#547f1d] active:scale-[0.99]"
              >
                <Phone className="h-4 w-4 shrink-0" />
                Call Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
