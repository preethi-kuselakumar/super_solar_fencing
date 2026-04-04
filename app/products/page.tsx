import ProductsCatalogClient from "@/app/products/ProductsCatalogClient";
import { getCatalogProducts } from "@/lib/catalogData";

export default async function ProductsPage() {
  const products = await getCatalogProducts();

  return (
    <ProductsCatalogClient initialProducts={products} />
  );
}
