"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MapPin, Clock, Phone, Globe, MessageCircle, Hash, Mail } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col w-full z-[100] sticky top-0 shadow-md">
      {/* Top Banner */}
      <div className="hidden md:flex justify-between items-center w-full bg-[#2C2C2A] text-gray-400 py-1.5 px-4 sm:px-6 lg:px-8 text-xs font-medium">
        <div className="flex space-x-6">
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
        <div className="flex items-center space-x-4">
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
              <Link href="/contact" className="px-5 py-2 text-[#639922] font-bold text-[12px] tracking-widest uppercase border-2 border-[#639922] rounded-full hover:bg-[#639922] hover:text-white transition">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden p-1 text-slate-800" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 bg-[#F5F5F5] px-4 pt-2 pb-6 space-y-1 absolute w-full shadow-xl">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#639922] hover:bg-white rounded-md transition-colors">HOME</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#639922] hover:bg-white rounded-md transition-colors">ABOUT</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#639922] hover:bg-white rounded-md transition-colors">PRODUCTS</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-gray-700 hover:text-[#639922] hover:bg-white rounded-md transition-colors">SERVICES</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 mt-4 text-center font-bold text-[12px] tracking-widest uppercase border-2 border-[#639922] text-[#639922] rounded-full hover:bg-[#639922] hover:text-white transition-colors">GET A QUOTE</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
