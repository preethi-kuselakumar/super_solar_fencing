import { ProjectSection } from "@/components/ProjectSection";
import { PageHeader } from "@/components/PageHeader";
import { getCatalogProjects } from "@/lib/catalogData";
import Image from "next/image";
import { ProductEnquireModal } from "@/components/ProductEnquireModal";

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

export default async function ServicesPage() {
  const fetchedProjects = await getCatalogProjects();
  // Ensure we show at least 6 projects, combining fetched ones with fallbacks if needed
  const displayProjects = [...fetchedProjects, ...fallbackProjects].slice(0, Math.max(6, fetchedProjects.length));

  return (
    <main className="bg-[#F5F5F5] min-h-screen">
      <PageHeader 
        title="Our Services" 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} 
      />
      
      {/* Services List Section */}
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="space-y-24">
          {serviceData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 items-stretch group bg-white shadow-md rounded-2xl overflow-hidden`}
              >
                {/* Image takes 5 columns */}
                <div className={`lg:col-span-5 h-[300px] lg:h-auto relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                {/* Description takes 7 columns */}
                <div className={`lg:col-span-7 flex flex-col justify-center p-8 lg:p-12 space-y-6 bg-white ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2A] tracking-tight hover:text-[#639922] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-[#639922] rounded-full mt-4"></div>
                  </div>
                  <div className="text-gray-600 text-lg leading-relaxed flex-grow space-y-4">
                    {service.desc.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  <div>
                    <ProductEnquireModal productName={service.title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Projects / Works done section */}
      <div className="py-16 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <span className="text-[#639922] font-bold text-[13px] tracking-widest uppercase mb-4 block">Our Works</span>
          <h2 className="text-[36px] md:text-4xl font-extrabold text-[#2C2C2A] leading-[1.15] tracking-tight">
            Clients & Projects Completed
          </h2>
        </div>
        
        {/* Gallery for Works (Always visible name on mobile, hover on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 max-w-7xl mx-auto">
          {displayProjects.map(project => (
            <div key={project.id} className="group relative w-full h-[300px] rounded-xl overflow-hidden shadow-md cursor-pointer">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay: permanent on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-white text-xl font-bold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
