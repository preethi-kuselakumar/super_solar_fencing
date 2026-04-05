import { getCatalogProjects } from "@/lib/catalogData";
import { getCatalogServices } from "@/lib/catalogData";
import Image from "next/image";
import { ServicesDetailsPanel } from "@/components/ServicesDetailsPanel";

// Dummy service data matching the homepage section
const serviceData = [
  {
    id: 1,
    title: "Solar Panels",
    desc: "Our top-tier solar panels are engineered for maximum efficiency and durability. We use the latest photovoltaic technology to ensure you get the absolute most out of every sun ray that hits your roof. Designed to withstand harsh weather conditions, these panels provide a reliable, long-term energy solution.\n\nWhether you're looking to power a small residential home or a large commercial facility, our solar panels offer scalable solutions that significantly reduce energy bills and your carbon footprint. Experience the peace of mind that comes with producing your own clean energy.",
    image: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Solar Power Systems",
    desc: "A fully integrated solar power system takes the energy captured by your panels and transforms it into usable electricity for your entire property. We handle the design, component selection, and seamless integration of inverters and grid-tie systems tailored specifically to your load requirements.\n\nOur systems are built to ensure uninterrupted power flow and intelligent energy distribution. Stay resilient against grid outages and rising electricity costs while seamlessly operating your essential appliances or industrial equipment.",
    image: "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg",
  },
  {
    id: 3,
    title: "Hydropower Plants",
    desc: "Hydropower is one of the most reliable and proven sources of renewable energy. Our team specializes in the development and deployment of micro and mini hydropower plants, fully utilizing local water resources to generate consistent electricity with minimal environmental impact.\n\nFrom site assessment and flow analysis to turbine installation and grid synchronization, we manage every phase of the project. Our solutions are designed to last for decades, providing a steady baseline of green energy for communities and commercial operations alike.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Wind Turbines",
    desc: "Harness the power of the wind with our state-of-the-art wind turbine installations. Designed specifically to capture aerodynamic forces even in variable wind conditions, these turbines serve as the perfect complement or alternative to solar installations.\n\nWe provide end-to-end services including wind mapping, structural foundation engineering, and maintenance. Ideal for both rural landscapes and designated industrial zones, our wind turbines offer exceptional yield and robust performance across their lifespan.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Maintenance Service",
    desc: "To ensure your renewable energy systems continue to operate at peak efficiency, proactive and scheduled maintenance is crucial. Our dedicated service teams perform regular inspections, cleaning, and diagnostics on all your solar, wind, and hydro assets.\n\nWe utilize advanced monitoring technology to preemptively identify and resolve issues before they lead to downtime. By opting for our comprehensive maintenance service, you safeguard your investment, extend the lifespan of your equipment, and guarantee continuous energy production.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Battery Storage",
    desc: "Store excess energy generated during peak conditions for use during the night or overcast days with our high-capacity battery storage solutions. We offer scalable lithium-ion and advanced chemical batteries that seamlessly integrate into any existing or new power system.\n\nOur intelligent battery management systems ensure safe charging cycles, optimize longevity, and provide instantaneous backup power during grid failures. Achieve true energy independence and maintain total control over your power consumption and distribution.",
    image: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Eco Consulting",
    desc: "Navigating the transition to sustainable energy can be complex. Our eco consulting division provides expert guidance tailored to your specific operational needs and sustainability goals. We analyze your current energy usage, identify inefficiencies, and recommend the best mix of renewable technologies.\n\nBeyond technical advice, we also assist with securing green certifications, navigating local regulations, and maximizing available incentives or rebates. Partner with us to construct an effective roadmap towards a greener, cost-efficient future.",
    image: "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg",
  },
  {
    id: 8,
    title: "Installation Setup",
    desc: "Our installation setup service is defined by precision, safety, and speed. From the initial site survey to the final switch-on, our certified technicians ensure every component is securely mounted, safely wired, and perfectly aligned according to industry standards.\n\nWe pride ourselves on non-disruptive installation processes that respect your property and daily operations. Let our experts handle the heavy lifting and strict compliance checks, leaving you with a flawless, immediately operational green energy system.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
  }
];

const fallbackProjects = [
  { id: "fp-1", title: "Green Valley Farm", image: "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg" },
  { id: "fp-2", title: "Solar Fencing Install", image: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop" },
  { id: "fp-3", title: "Alpine Ridge Systems", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop" },
  { id: "fp-4", title: "Agri-Tech Solar Power", image: "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=800&auto=format&fit=crop" },
  { id: "fp-5", title: "Perimeter Security setup", image: "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=800&auto=format&fit=crop" },
  { id: "fp-6", title: "Commercial Grid Array", image: "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg" },
];

function toAnchor(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default async function ServicesPage() {
  const [fetchedProjects, cmsServices] = await Promise.all([
    getCatalogProjects(),
    getCatalogServices(),
  ]);
  // Ensure we show at least 6 projects, combining fetched ones with fallbacks if needed
  const displayProjects = [...fetchedProjects, ...fallbackProjects].slice(0, Math.max(6, fetchedProjects.length));

  const displayServices =
    cmsServices.length > 0
      ? cmsServices.map((service) => ({
          id: service.id,
          title: service.title,
          desc: service.description,
          image: service.image,
          anchor: service.slug || toAnchor(service.title),
        }))
      : serviceData.map((service) => ({
          id: String(service.id),
          title: service.title,
          desc: service.desc,
          image: service.image,
          anchor: toAnchor(service.title),
        }));

  return (
    <main className="bg-[#F5F5F5] min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-5 sm:pt-6 md:pt-10 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-4 sm:mb-5 gap-3 sm:gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C2C2A] tracking-tight">
              Our Services
            </h1>
            <span className="text-xs sm:text-sm font-semibold text-slate-500 hidden sm:block">
              Choose a service to jump
            </span>
          </div>

          <ServicesDetailsPanel services={displayServices} />
        </div>
      </section>

      {/* Projects / Works done section */}
      <div className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
          <span className="text-[#639922] font-bold text-[13px] tracking-widest uppercase mb-4 block">Our Works</span>
          <h2 className="text-[28px] sm:text-[32px] md:text-4xl font-extrabold text-[#2C2C2A] leading-[1.15] tracking-tight">
            Clients & Projects Completed
          </h2>
        </div>
        
        {/* Gallery for Works (Always visible name on mobile, hover on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 px-4 md:px-8 max-w-7xl mx-auto">
          {displayProjects.map(project => (
            <div key={project.id} className="group relative w-full h-[180px] sm:h-[240px] md:h-[300px] rounded-none overflow-hidden shadow-md cursor-pointer">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay: permanent on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-white text-sm sm:text-lg md:text-xl font-bold leading-tight line-clamp-2">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
