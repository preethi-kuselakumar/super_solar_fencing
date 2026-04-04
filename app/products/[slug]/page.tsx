import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft, Zap, ListTree } from "lucide-react";
import {
  getCatalogProductBySlug,
  getCatalogProducts,
} from "@/lib/catalogData";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ProductEnquireModal } from "@/components/ProductEnquireModal";
import { ProductCard } from "@/components/ProductCard";

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
  const [product, allProducts] = await Promise.all([
    getCatalogProductBySlug(slug),
    getCatalogProducts(),
  ]);

  if (!product) {
    notFound();
  }

  const relatedProducts = allProducts
    .filter(
      (candidate) =>
        candidate.slug !== product.slug &&
        candidate.category === product.category,
    )
    .slice(0, 3);

  return (
    <main className="pt-[100px] lg:pt-[110px] pb-16 min-h-screen bg-[#F5F5F5]">
      <SectionWrapper>
        <Link href="/products" className="inline-flex items-center text-slate-500 hover:text-[#639922] mb-4 transition font-semibold group uppercase text-sm tracking-wider">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden relative">
          {product.offer && (
             <div className="absolute top-6 left-6 z-10 bg-[#639922] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded shadow-lg">
               {product.offer}
             </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Standard Single Image */}
            <div className="lg:col-span-5 p-8 lg:p-10 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 relative flex items-center justify-center aspect-square">
                 {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-h-full w-full object-contain hover:scale-105 transition-transform duration-700 bg-white mix-blend-multiply"
                    />
                 ) : (
                    <div className="aspect-square bg-slate-100/50 rounded-xl w-full flex items-center justify-center border-2 border-dashed border-slate-200">
                       <Zap className="w-20 h-20 text-slate-300" />
                    </div>
                 )}
            </div>

            {/* Right: Focused Details */}
            <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-start">
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2A] mb-3 tracking-tight leading-tight">
                {product.name}
              </h1>

              {product.price !== undefined && (
                 <p className="text-2xl font-extrabold text-[#639922] mb-5">
                   ₹{product.price.toFixed(2)}
                 </p>
              )}

              {product.varieties && product.varieties.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-[#2C2C2A] uppercase tracking-wider mb-3">
                    Available Variations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.varieties.map((variety, i) => (
                      <span key={i} className="px-4 py-2 border border-slate-200 bg-slate-50 text-slate-700 font-semibold text-xs rounded-md shadow-sm">
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Grid block for Features and Specs horizontally */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-6 w-full flex-grow">
                {/* Features List */}
                {product.features && product.features.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-[#639922]" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-[#2C2C2A]">
                          <Check className="w-4 h-4 text-[#639922] mr-3 shrink-0 mt-[2px]" />
                          <span className="font-semibold text-sm leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* specifications Card */}
                {product.specifications && product.specifications.length > 0 && (
                    <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center">
                        <ListTree className="w-4 h-4 mr-2 text-[#639922]" />
                        Technical Specifications
                    </h3>
                    <div className="border-t border-b border-slate-200">
                        <table className="w-full text-left text-sm">
                        <tbody className="divide-y divide-slate-100">
                            {product.specifications.map((spec, i) => (
                            <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                <th className="py-3 px-1 font-semibold text-slate-500 w-[50%] pr-4 text-[11px] tracking-widest uppercase">
                                  {spec.key}
                                </th>
                                <td className="py-3 font-bold text-[#2C2C2A]">
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
              <div className="flex flex-col gap-6 pt-6 mt-auto border-t border-slate-100">
                {/* Only show description if it exists and is not empty */}
                {product.description && product.description.trim() !== "" && (
                  <div className="prose prose-slate max-w-full">
                    <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
                      {product.description}
                    </p>
                  </div>
                )}

                <ProductEnquireModal productName={product.name} />
              </div>

            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <div className="flex items-end justify-between mb-5">
              <div>
                <h2 className="text-2xl font-extrabold text-[#2C2C2A] tracking-tight">
                  Related Products
                </h2>
                <p className="text-slate-600 mt-1 text-sm">
                  More options in the {product.category} category.
                </p>
              </div>
              <Link
                href="/products"
                className="text-sm font-semibold text-[#639922] hover:text-[#2C2C2A] transition-colors"
              >
                View all products
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </SectionWrapper>
    </main>
  );
}
