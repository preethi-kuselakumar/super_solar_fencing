"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MapPin, Clock, Phone, Globe, MessageCircle, Hash, Mail } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col w-full z-50 sticky top-0 shadow-sm">
      {/* Top Banner similar to reference image */}
      <div className="hidden md:flex justify-between items-center w-full bg-[#1C1C1C] text-gray-400 py-2 px-4 sm:px-6 lg:px-8 text-xs font-medium">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>222, Texas, USA</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-3.5 h-3.5 text-orange-500" />
            <span>10 AM - 8 PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-orange-500" />
            <span>+01 222 333</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-orange-500 transition"><Globe className="w-3.5 h-3.5" /></Link>
          <Link href="#" className="hover:text-orange-500 transition"><MessageCircle className="w-3.5 h-3.5" /></Link>
          <Link href="#" className="hover:text-orange-500 transition"><Hash className="w-3.5 h-3.5" /></Link>
          <Link href="#" className="hover:text-orange-500 transition"><Mail className="w-3.5 h-3.5" /></Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#FCF8F2] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link href="/" className="font-extrabold text-3xl tracking-tight text-orange-500">
              Sola.
            </Link>
            
            {/* Desktop Links */}
            <div className="hidden md:flex space-x-10 text-[13px] font-bold tracking-widest text-gray-500 uppercase">
              <Link href="/" className="text-orange-500 transition">Home</Link>
              <Link href="/about" className="hover:text-orange-500 transition">About</Link>
              <Link href="/products" className="hover:text-orange-500 transition">Products</Link>
              <Link href="/services" className="hover:text-orange-500 transition">Services</Link>
              <Link href="/works" className="hover:text-orange-500 transition">Projects</Link>
              <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link href="/contact" className="px-6 py-2.5 text-orange-500 font-bold text-[13px] tracking-widest uppercase border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden p-2 text-slate-800" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 bg-[#FCF8F2] px-4 pt-2 pb-6 space-y-2 absolute w-full shadow-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-orange-500 rounded-md">HOME</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-gray-600 hover:bg-white rounded-md">ABOUT</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-gray-600 hover:bg-white rounded-md">PRODUCTS</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-gray-600 hover:bg-white rounded-md">SERVICES</Link>
            <Link href="/works" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-gray-600 hover:bg-white rounded-md">PROJECTS</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 mt-4 text-center font-bold text-[13px] tracking-widest uppercase border-2 border-orange-500 text-orange-500 rounded-full">GET A QUOTE</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
