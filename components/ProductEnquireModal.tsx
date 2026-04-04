"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function ProductEnquireModal({ productName }: { productName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "I am interested in '" + productName + "'. Please send details and quotations.",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending enquiry and close modal
    setIsOpen(false);
    alert("Enquiry sent successfully!");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#639922] hover:bg-[#2C2C2A] text-white text-center px-10 py-3.5 rounded font-bold text-xs tracking-widest uppercase transition-all shadow-md items-center justify-center flex"
      >
        Enquire Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-red-500 hover:rotate-90 transition-all bg-slate-100/50 hover:bg-slate-100 rounded-full p-1.5"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-6 md:p-8 text-left">
              <h2 className="text-2xl font-extrabold text-[#2C2C2A] mb-6 text-center">Enquire Now</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A] mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2A] placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-[#639922] transition-colors"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A] mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobile"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2A] placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-[#639922] transition-colors"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A] mb-2">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2A] placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-[#639922] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#639922] hover:bg-[#2C2C2A] text-white text-center px-6 py-4 rounded-lg font-bold text-xs tracking-widest uppercase transition-all shadow-md mt-2"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
