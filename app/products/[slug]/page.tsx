import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft, Zap, ListTree } from "lucide-react";
import {
  getCatalogProductBySlug,
  getCatalogProducts,
} from "@/lib/catalogData";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ImageGallery } from "@/components/ImageGallery";

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
    <main className="pt-24 pb-16 min-h-screen bg-[#FAF7F2]">
      <SectionWrapper>
        <Link href="/products" className="inline-flex items-center text-slate-500 hover:text-[#FF7A49] mb-8 transition font-semibold group uppercase text-sm tracking-wider">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
          {product.offer && (
             <div className="absolute top-6 left-6 z-10 bg-[#FF7A49] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded shadow-lg">
               {product.offer}
             </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Interactive Gallery */}
            <div className="lg:col-span-5 p-8 lg:p-12 lg:pr-8 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 relative">
               <div className="sticky top-28">
                 {product.images && product.images.length > 0 ? (
                   <ImageGallery images={product.images} />
                 ) : (
                    <div className="h-80 bg-slate-100/50 rounded-xl w-full flex items-center justify-center border-2 border-dashed border-slate-200">
                        <Zap className="w-20 h-20 text-slate-300" />
                    </div>
                 )}
               </div>
            </div>

            {/* Right: Rich Details */}
            <div className="lg:col-span-7 p-8 lg:p-14">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C2028] mb-6 tracking-tight leading-tight">
                {product.name}
              </h1>

              {product.price !== undefined && (
                 <p className="text-3xl font-extrabold text-[#FF7A49] mb-8">
                   ₹{product.price.toFixed(2)}
                 </p>
              )}

              <div className="prose prose-lg prose-slate mb-12">
                <p className="text-slate-600 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              {product.varieties && product.varieties.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-sm font-bold text-[#1C2028] uppercase tracking-wider mb-4">
                    Available Variations
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.varieties.map((variety, i) => (
                      <span key={i} className="px-4 py-2 border-2 border-slate-200 text-slate-700 font-semibold text-sm rounded-lg hover:border-[#FF7A49] transition-colors cursor-pointer">
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Grid block for Features and Specs */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-12">
                {/* Features List */}
                {product.features && product.features.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-[#1C2028] uppercase tracking-wider mb-6 flex items-center border-b border-slate-100 pb-4">
                      <Zap className="w-4 h-4 mr-2 text-[#FF7A49]" />
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-700 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                          <Check className="w-5 h-5 text-[#FF7A49] mr-3 shrink-0 mt-0.5" />
                          <span className="font-medium text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* specifications Card */}
                {product.specifications && product.specifications.length > 0 && (
                    <div>
                    <h3 className="text-sm font-bold text-[#1C2028] uppercase tracking-wider mb-6 flex items-center border-b border-slate-100 pb-4">
                        <ListTree className="w-4 h-4 mr-2 text-[#FF7A49]" />
                        Specifications
                    </h3>
                    <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
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
                )}
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="flex-1 bg-[#FF7A49] hover:bg-[#e66a3d] text-white text-center px-8 py-4 rounded-lg font-bold text-sm tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#FF7A49]/20"
                >
                  Enquire Now
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 bg-white hover:bg-slate-50 text-[#1C2028] border-2 border-slate-200 text-center px-8 py-4 rounded-lg font-bold text-sm tracking-wider uppercase transition-all hover:border-slate-300"
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
