"use client";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="bg-[#F5F5F5] min-h-screen">
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} 
      />
      <div className="pt-12 pb-16">
        <SectionWrapper>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#639922] font-bold text-[13px] tracking-widest uppercase block mb-4">Get In Touch</span>
            <h2 className="text-[40px] md:text-[46px] font-extrabold text-[#2C2C2A] leading-[1.15] tracking-tight">
              We're Here to Help
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              Have questions about our products or need a custom perimeter security assessment? Our team of experts is ready to assist you.
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-[#639922]">
              <h3 className="text-2xl font-extrabold text-[#2C2C2A] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#F5F5F5] text-[#639922] rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform group-hover:scale-110">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">Phone</p>
                    <p className="text-[#2C2C2A] font-bold text-lg">+1 (555) 123-4567</p>
                    <p className="text-slate-500 text-sm mt-1">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#F5F5F5] text-[#639922] rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform group-hover:scale-110">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">Email</p>
                    <p className="text-[#2C2C2A] font-bold text-lg">info@supersolarfencing.com</p>
                    <p className="text-slate-500 text-sm mt-1">Online support 24/7</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#F5F5F5] text-[#639922] rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-transform group-hover:scale-110">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">Office Location</p>
                    <p className="text-[#2C2C2A] font-bold text-lg">123 Fencing St,</p>
                    <p className="text-slate-500 text-sm mt-1">Industrial Hub, TX 75001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-2xl h-64 overflow-hidden relative shadow-md flex flex-col items-center justify-center group cursor-pointer">
              <MapPin className="w-12 h-12 text-[#639922] mb-2 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
              <span className="text-[#2C2C2A] font-bold">Interactive Map Integration</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 h-full relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5F5E5A] to-[#5F5E5A]"></div>

              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-[#F5F5F5] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#639922]" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#2C2C2A] mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-8 max-w-md text-lg">
                    Thank you for reaching out. We have received your inquiry and our team will get back to you within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3.5 bg-[#2C2C2A] text-white hover:bg-[#639922] font-bold rounded-lg transition-colors text-xs tracking-widest uppercase"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-extrabold text-[#2C2C2A] mb-8">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A] mb-2">Name *</label>
                        <input required type="text" id="name" className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2A] placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-[#639922] transition-colors" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A] mb-2">Mobile Number *</label>
                        <input required type="tel" id="mobile" className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2A] placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-[#639922] transition-colors" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A] mb-2">Location *</label>
                      <input required type="text" id="location" className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2A] placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-[#639922] transition-colors" placeholder="City, State" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A] mb-2">How can we help? *</label>
                      <textarea required id="message" rows={5} className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2A] placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-[#639922] transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#639922] hover:bg-[#2C2C2A] text-white font-bold py-4 mt-2 rounded-lg flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md text-xs tracking-widest uppercase"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-5 h-5 mr-3" /> Send Message</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
      </div>
    </main>
  );
}
