import "server-only";

import { urlFor } from "@/lib/imageUrl";
import {
  getAboutPage,
  getFeaturedProducts,
  getProductBySlug,
  getProducts,
  getProjects,
} from "@/lib/sanityFetch";
import type {
  AboutPageContent,
  CatalogProduct,
  CatalogProject,
  Product as SanityProduct,
  Project as SanityProject,
} from "@/lib/types";

function getImageUrl(image: SanityProduct["mainImage"]): string | null {
  if (!image) {
    return null;
  }

  try {
    return urlFor(image).width(1400).fit("max").auto("format").url();
  } catch {
    return null;
  }
}

function getProjectImageUrl(image: SanityProject["images"][number] | undefined) {
  if (!image) {
    return null;
  }

  try {
    return urlFor(image).width(1400).fit("max").auto("format").url();
  } catch {
    return null;
  }
}

function mapSanityProductToCatalog(product: SanityProduct): CatalogProduct {
  const mainImageUrl = getImageUrl(product.mainImage ?? null);
  const galleryUrls = (product.gallery ?? [])
    .map((image) => getImageUrl(image))
    .filter((image): image is string => Boolean(image));

  const images = [mainImageUrl, ...galleryUrls].filter(
    (image): image is string => Boolean(image),
  );

  const shortDescription = product.shortDescription?.trim() || product.description?.slice(0, 160) || "";

  return {
    id: product._id,
    name: product.name,
    slug: product.slug,
    category: product.category?.title || "Uncategorized",
    shortDescription,
    description: product.description || "",
    features: product.features ?? [],
    specifications: product.specifications ?? [],
    images: images.length > 0 ? images : ["/placeholder.jpg"],
    price: undefined // CMS has no price field; dummy data stripped.
  };
}

export async function getCatalogProducts(): Promise<CatalogProduct[]> {
  const sanityProducts = await getProducts();
  return sanityProducts.map(mapSanityProductToCatalog);
}

export async function getFeaturedCatalogProducts(limit = 6): Promise<CatalogProduct[]> {
  const safeLimit = Math.max(1, limit);
  const featuredProducts = await getFeaturedProducts();
  return featuredProducts.map(mapSanityProductToCatalog).slice(0, safeLimit);
}

export async function getCatalogProductBySlug(slug: string): Promise<CatalogProduct | null> {
  const normalizedSlug = slug.trim().toLowerCase();
  if (!normalizedSlug) return null;

  const sanityProduct = await getProductBySlug(normalizedSlug);
  return sanityProduct ? mapSanityProductToCatalog(sanityProduct) : null;
}

export async function getCatalogCategories(): Promise<string[]> {
  const products = await getCatalogProducts();
  const categorySet = new Set(
    products
      .map((product) => product.category)
      .filter((category) => category && category.trim().length > 0),
  );
  return ["All", ...Array.from(categorySet).sort((a, b) => a.localeCompare(b))];
}

function mapSanityProjectToCatalog(project: SanityProject): CatalogProject {
  const mainImage = getProjectImageUrl(project.images?.[0]);

  return {
    id: project._id,
    title: project.title,
    category: "Installation",
    image: mainImage || "/placeholder-project.jpg",
    description: project.description,
  };
}

export async function getCatalogProjects(): Promise<CatalogProject[]> {
  const projects = await getProjects();
  return projects.map(mapSanityProjectToCatalog);
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  const fallbackAboutPageContent: AboutPageContent = {
    title: "About Super Solar Fencing",
    content: "We are industry leaders in designing, engineering, and manufacturing high-performance solar-powered perimeter security solutions for agricultural, industrial, and residential applications.",
    image: "/placeholder.jpg",
  };

  const aboutPage = await getAboutPage();

  if (!aboutPage) {
    return fallbackAboutPageContent;
  }

  const image =
    aboutPage.image?.asset?._ref || aboutPage.image?.asset?._id
      ? urlFor(aboutPage.image).width(1200).fit("max").auto("format").url()
      : fallbackAboutPageContent.image;

  return {
    title: aboutPage.title || fallbackAboutPageContent.title,
    content: aboutPage.content || fallbackAboutPageContent.content,
    image,
  };
}
