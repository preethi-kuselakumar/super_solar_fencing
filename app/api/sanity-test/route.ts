import { getProducts } from "@/lib/sanityFetch";
import { urlFor } from "@/lib/imageUrl";

export const runtime = "nodejs";

// Temporary verification endpoint for Phase 2 integration checks.
export async function GET() {
  try {
    const products = await getProducts();

    const sample = products.slice(0, 5).map((product) => {
      const mainImageUrl = product.mainImage
        ? urlFor(product.mainImage).width(800).url()
        : null;

      return {
        name: product.name,
        slug: product.slug,
        hasValidSlug: Boolean(product.slug && product.slug.length > 0),
        mainImageUrl,
        hasAccessibleImage: Boolean(mainImageUrl),
      };
    });

    console.log("[sanity-test] products fetched:", products.length);
    console.log("[sanity-test] sample:", sample);

    return Response.json({
      ok: true,
      totalProducts: products.length,
      sample,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    console.error("[sanity-test] failed:", message);

    return Response.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 },
    );
  }
}
