import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft, Zap, ListTree } from "lucide-react";
import {
  getCatalogProductBySlug,
  getCatalogProducts,
} from "@/lib/catalogData";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImageGallery } from "@/components/ImageGallery";

export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await getCatalogProducts();
  return products.map((product) => ({ slug: product.slug }));
}

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = await getCatalogProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50">
      <SectionWrapper>
        <Link href="/products" className="inline-flex items-center text-slate-500 hover:text-emerald-600 mb-8 transition font-semibold group">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Products
        </Link>
        
        <div className="bg-white rounded-4xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Interactive Gallery */}
            <div className="lg:col-span-5 p-8 lg:p-12 lg:pr-8 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100">
               <div className="sticky top-28">
                 <ImageGallery images={product.images} />
               </div>
            </div>

            {/* Right: Rich Details */}
            <div className="lg:col-span-7 p-8 lg:p-14">
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full mb-6 relative">
                {product.category}
                <span className="absolute -inset-1 rounded-full bg-emerald-200 opacity-20 animate-pulse"></span>
              </span>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                {product.name}
              </h1>
              
              <p className="text-4xl font-extrabold text-emerald-600 mb-8">
                ${product.price.toFixed(2)}
              </p>
              
              <div className="prose prose-lg prose-slate prose-emerald mb-12">
                <p className="text-slate-600 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              {/* Grid block for Features and Specs */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-12">
                {/* Features List */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center border-b border-slate-100 pb-4">
                    <Zap className="w-6 h-6 mr-3 text-amber-500 fill-amber-500/20" /> 
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-slate-700 bg-slate-50 p-4 rounded-xl">
                        <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                        <span className="font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* specifications Card */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center border-b border-slate-100 pb-4">
                    <ListTree className="w-6 h-6 mr-3 text-blue-500" /> 
                    Specifications
                  </h3>
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left text-sm">
                      <tbody className="divide-y divide-slate-100">
                        {product.specifications.map((spec, i) => (
                          <tr key={i} className="bg-white hover:bg-slate-50 transition-colors">
                            <th className="px-5 py-4 font-bold text-slate-800 w-1/3 bg-slate-50/50">
                              {spec.key}
                            </th>
                            <td className="px-5 py-4 text-slate-600 font-medium">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
                <Link 
                  href="/contact" 
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-center px-8 py-5 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-0.5 shadow-xl shadow-emerald-600/30"
                >
                  Enquire Now
                </Link>
                <Link 
                  href="/contact" 
                  className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 text-center px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:border-slate-300"
                >
                  Download Brochure
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
