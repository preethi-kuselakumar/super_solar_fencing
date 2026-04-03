import ProductsCatalogClient from "@/app/products/ProductsCatalogClient";
import { getCatalogCategories, getCatalogProducts } from "@/lib/catalogData";

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getCatalogProducts(),
    getCatalogCategories(),
  ]);

  return (
    <ProductsCatalogClient initialProducts={products} categories={categories} />
  );
}
