import { SectionWrapper } from "@/components/SectionWrapper";
import { Shield, Target, Award, CheckCircle } from "lucide-react";
import { getAboutPageContent } from "@/lib/catalogData";

export default async function AboutPage() {
  const aboutContent = await getAboutPageContent();
  const highlightedTitle = aboutContent.title.replace(/^about\s+/i, "");

  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50">
      <SectionWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            About <span className="text-emerald-600">{highlightedTitle}</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {aboutContent.content}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-2xl mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide reliable, eco-friendly, and cost-effective perimeter protection that deters intrusion and ensures total peace of mind for property owners worldwide, without relying on grid power.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-2xl mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To become the global standard for autonomous perimeter security, integrating sustainable energy with smart technologies to create safer boundaries for communities and industries.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why thousands trust our <span className="text-emerald-400">Security Solutions</span>
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Decades of engineering excellence go into every energizer and panel we manufacture. Here is what sets our technology apart from conventional fencing.
              </p>
              
              <ul className="space-y-4">
                {[
                  "100% Off-grid autonomy with heavy-duty battery backups",
                  "Non-lethal high-voltage deterrent (safe but extremely effective)",
                  "Weather-proof components designed for extreme climates",
                  "Low maintenance structural integrity",
                  "Compliance with international safety standards"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-4 shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-full max-w-sm aspect-square bg-slate-800 rounded-full flex flex-col items-center justify-center border-8 border-slate-700 relative shadow-2xl">
                <Shield className="w-32 h-32 text-emerald-500 mb-4" />
                <span className="text-2xl font-bold tracking-widest text-slate-300">SECURED</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
