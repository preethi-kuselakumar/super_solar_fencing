import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Our Address */}
          <div>
            <h4 className="text-white text-[18px] font-bold mb-4">Our Address</h4>
            <div className="space-y-2.5 mb-5">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#639922] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-[15px] leading-6">123 Street, Texas, USA</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#639922] shrink-0 mt-0.5" />
                <a href="tel:+000111123456" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">+000 111 123456</a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#639922] shrink-0 mt-0.5" />
                <a href="mailto:info@yourinfo.com" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">info@yourinfo.com</a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-800 flex items-center justify-center text-[#639922] hover:bg-[#639922] hover:text-white transition-all group">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-800 flex items-center justify-center text-[#639922] hover:bg-[#639922] hover:text-white transition-all group">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.344 3.608 1.612.966 1.258 1.218 2.39 1.282 3.693.058 1.265.07 1.645.07 4.848 0 3.204-.012 3.584-.07 4.849-.064 1.303-.316 2.435-1.282 3.693-.975 1.268-2.242 1.55-3.608 1.612-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.344-3.608-1.612-.966-1.258-1.218-2.39-1.282-3.693-.058-1.265-.07-1.645-.07-4.848 0-3.204.012-3.584.07-4.849.064-1.303.316-2.435 1.282-3.693.975-1.268 2.242-1.55 3.608-1.612 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.072 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.667.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.667-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-800 flex items-center justify-center text-[#639922] hover:bg-[#639922] hover:text-white transition-all group">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://wa.me/000111123456" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-800 flex items-center justify-center text-[#639922] hover:bg-[#639922] hover:text-white transition-all group">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.394 0 .005 5.389.005 12.025c0 2.123.551 4.195 1.6 6.012L.012 24l6.111-1.6c1.764.965 3.755 1.474 5.908 1.474 6.634 0 12.025-5.389 12.025-12.025S18.667 0 12.031 0zm3.385 17.387c-.496.068-1.572.336-3.874-1.282-1.92-1.35-3.32-3.414-4.52-5.7-.633-1.21-.976-2.585-.562-3.693.307-.82 1.055-1.22 1.66-1.294.3-.035.65.04.912.228.293.208.536.726.804 1.345.385.882.52 1.155.674 1.408.204.336.195.66-.02 1.026-.264.45-.632.742-1.07 1.077-.168.128-.352.28-.5.485-.18.252-.405.518-.088 1.092.348.63 1.05 1.545 1.706 2.148.868.803 1.83 1.418 2.57 1.758.398.182.72.19 1.055-.008.388-.23.633-.51 1.008-1.022.38-.52.748-.68 1.144-.576.386.108 2.455 1.173 2.87 1.385.412.213.682.343.782.532.1.188.1.99-.24 2.115-.178.59-.806 1.485-1.8 1.67-.144.027-.308.064-.475.084z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[18px] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">Products</Link></li>
              <li><Link href="/works" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-[18px] font-bold mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li><Link href="/products" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">Solar Panels</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">Solar Fencing</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">Wind Turbines</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">Hydropower</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-[#639922] transition-colors text-[15px]">Maintenance</Link></li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white text-[18px] font-bold mb-4">Find Us</h4>
            <div className="w-full h-[180px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=Texas%20USA&z=10&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
        
      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 bg-black">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-center md:justify-start items-center text-[15px] text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
