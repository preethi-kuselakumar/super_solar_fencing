"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MapPin,
  Clock,
  Phone,
  Globe,
  MessageCircle,
  Hash,
  Mail,
  CircleHelp,
  Package,
  House,
  Wrench,
  PhoneCall,
} from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const phoneNumber = "+01222333";

  const mobileNavItems = [
    { href: "/about", label: "About", icon: CircleHelp },
    { href: "/products", label: "Products", icon: Package },
    { href: "/", label: "Home", icon: House },
    { href: "/services", label: "Services", icon: Wrench },
    { href: `tel:${phoneNumber}`, label: "Call", icon: PhoneCall },
  ];

  return (
    <header className="flex flex-col w-full z-[100] sticky top-0 shadow-md">
      {/* Top Banner */}
      <div className="hidden md:flex items-center justify-center relative w-full bg-[#2C2C2A] text-gray-400 py-1.5 px-4 sm:px-6 lg:px-8 text-xs font-medium">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-[#639922]" />
            <span>222, Texas, USA</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-3.5 h-3.5 text-[#639922]" />
            <span>10 AM - 8 PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-[#639922]" />
            <span>+01 222 333</span>
          </div>
        </div>
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center space-x-4 lg:flex">
          <Link href="#" className="hover:text-[#639922] transition"><Globe className="w-3.5 h-3.5" /></Link>
          <Link href="#" className="hover:text-[#639922] transition"><MessageCircle className="w-3.5 h-3.5" /></Link>
          <Link href="#" className="hover:text-[#639922] transition"><Hash className="w-3.5 h-3.5" /></Link>
          <Link href="#" className="hover:text-[#639922] transition"><Mail className="w-3.5 h-3.5" /></Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#F5F5F5] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 md:h-16 items-center">
            {/* Logo */}
            <Link href="/" className="font-extrabold text-2xl md:text-3xl tracking-tight text-[#639922]">
              Sola.
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 text-[12px] font-bold tracking-widest text-gray-600 uppercase">
              <Link href="/" className="hover:text-[#639922] transition">Home</Link>
              <Link href="/about" className="hover:text-[#639922] transition">About</Link>
              <Link href="/products" className="hover:text-[#639922] transition">Products</Link>
              <Link href="/services" className="hover:text-[#639922] transition">Services</Link>
              <Link href="/contact" className="hover:text-[#639922] transition">Contact</Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link href={`tel:${phoneNumber}`} className="px-5 py-2 text-[#639922] font-bold text-[12px] tracking-widest uppercase border-2 border-[#639922] rounded-full hover:bg-[#639922] hover:text-white transition">
                Call Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-800 transition hover:border-[#639922] hover:text-[#639922]"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-[#F5F5F5] border-t border-slate-200 shadow-xl overflow-hidden transition-all duration-300 ease-out ${
            isOpen
              ? "max-h-[420px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="block min-h-[44px] px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#639922] hover:bg-white rounded-md transition-colors">HOME</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block min-h-[44px] px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#639922] hover:bg-white rounded-md transition-colors">ABOUT</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="block min-h-[44px] px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#639922] hover:bg-white rounded-md transition-colors">PRODUCTS</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block min-h-[44px] px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#639922] hover:bg-white rounded-md transition-colors">SERVICES</Link>
            <Link href={`tel:${phoneNumber}`} onClick={() => setIsOpen(false)} className="block min-h-[44px] px-3 py-2.5 mt-4 text-center font-bold text-[12px] tracking-widest uppercase border-2 border-[#639922] text-[#639922] rounded-full hover:bg-[#639922] hover:text-white transition-colors">CALL US</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav
        className="fixed inset-x-0 bottom-0 z-[120] border-t border-slate-200 bg-white/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_20px_rgba(15,23,42,0.08)] backdrop-blur md:hidden"
        aria-label="Mobile bottom navigation"
      >
        <div className="grid grid-cols-5 gap-1">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href !== `tel:${phoneNumber}` && pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex min-h-[56px] flex-col items-center justify-center rounded-xl px-1 py-2 text-[11px] font-semibold transition-colors ${
                  isActive
                    ? "bg-[#639922]/15 text-[#4f7d1c]"
                    : "text-slate-600 hover:bg-slate-100 hover:text-[#639922]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="mb-1 h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
