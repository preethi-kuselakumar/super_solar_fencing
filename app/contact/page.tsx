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
    <main className="bg-[#FAF7F2] min-h-screen">
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} 
      />
      <div className="pt-24 pb-16">
        <SectionWrapper>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF7A49] font-bold text-[13px] tracking-[0.15em] uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-[40px] md:text-[46px] font-extrabold text-[#1C2028] leading-[1.15] tracking-tight mb-6">
              We're Here to Help
            </h2>
            <p className="text-[#969696] text-[15px] leading-relaxed">
              Have questions about our products or need a custom perimeter security assessment? Our team of experts is ready to assist you.
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">Phone</p>
                    <p className="text-slate-900 font-bold">+1 (555) 123-4567</p>
                    <p className="text-slate-500 text-sm">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">Email</p>
                    <p className="text-slate-900 font-bold">info@supersolarfencing.com</p>
                    <p className="text-slate-500 text-sm">Online support 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">Office Location</p>
                    <p className="text-slate-900 font-bold">123 Fencing St,</p>
                    <p className="text-slate-500 text-sm">Industrial Hub, TX 75001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 rounded-3xl h-64 overflow-hidden relative shadow-inner border border-slate-200 flex flex-col items-center justify-center">
              <MapPin className="w-12 h-12 text-slate-400 mb-2" />
              <span className="text-slate-500 font-medium">Interactive Map Integration</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 h-full">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8 max-w-md">
                    Thank you for reaching out. We have received your inquiry and our team will get back to you within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold rounded-xl transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                        <input required type="text" id="name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                        <input required type="tel" id="phone" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input required type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="propertyType" className="text-sm font-semibold text-slate-700">Property Type</label>
                      <select id="propertyType" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-700">
                        <option>Agricultural</option>
                        <option>Industrial</option>
                        <option>Residential</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700">How can we help?</label>
                      <textarea required id="message" rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your perimeter requirements..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-5 h-5 mr-2" /> Send Message</>
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
