"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
  MessageSquare,
} from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const phoneNumber = "+01222333";
  const whatsappNumber = "000111123456";

  const mobileNavItems = [
    { href: "/about", label: "About", icon: CircleHelp },
    { href: "/products", label: "Products", icon: Package },
    { href: "/", label: "Home", icon: House },
    { href: "/services", label: "Services", icon: Wrench },
    { href: "/contact", label: "Contact", icon: MessageSquare },
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
        className="fixed inset-x-0 bottom-0 z-[120] border-t border-slate-200 bg-white/95 px-1 pb-[max(0.25rem,env(safe-area-inset-bottom))] pt-1 shadow-[0_-8px_20px_rgba(15,23,42,0.08)] backdrop-blur md:hidden"
        aria-label="Mobile bottom navigation"
      >
        <div className="grid grid-cols-5 gap-0.5">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href !== `tel:${phoneNumber}` && pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex min-h-[48px] flex-col items-center justify-center rounded-xl px-1 py-1 text-[10px] font-semibold transition-colors ${
                  isActive
                    ? "bg-[#639922]/15 text-[#4f7d1c]"
                    : "text-slate-600 hover:bg-slate-100 hover:text-[#639922]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="mb-0.5 h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Floating Quick Actions */}
      <div className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] right-4 z-[125] flex flex-col gap-3 md:hidden">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href={`https://wa.me/${whatsappNumber}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.482-1.459-1.656-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </Link>
        </motion.div>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <Link
            href={`tel:${phoneNumber}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#639922] text-white shadow-lg transition-transform hover:scale-105"
            aria-label="Call now"
          >
            <PhoneCall className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
