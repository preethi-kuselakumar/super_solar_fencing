import "server-only";

import { productData, projectData } from "@/lib/dummyData";
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

const dummyProducts: CatalogProduct[] = productData.map((product) => ({
  id: product.id,
  name: product.name,
  slug: product.slug,
  category: product.category,
  shortDescription: product.shortDescription,
  description: product.description,
  features: product.features,
  specifications: product.specifications,
  images: product.images,
  price: product.price,
}));

const dummyProjects: CatalogProject[] = projectData.map((project) => ({
  id: project.id,
  title: project.title,
  category: project.category,
  image: project.image,
}));

const fallbackAboutPageContent: AboutPageContent = {
  title: "About Super Solar Fencing",
  content:
    "We are industry leaders in designing, engineering, and manufacturing high-performance solar-powered perimeter security solutions for agricultural, industrial, and residential applications.",
  image:
    "https://tiimg.tistatic.com/fp/1/008/150/iron-solar-fencing-for-security-purposes-output-voltage-5-10-kva-321.jpg",
};

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

function mapSanityProductToCatalog(
  product: SanityProduct,
  fallback?: CatalogProduct,
): CatalogProduct {
  const mainImageUrl = getImageUrl(product.mainImage ?? null);
  const galleryUrls = (product.gallery ?? [])
    .map((image) => getImageUrl(image))
    .filter((image): image is string => Boolean(image));

  const images = [mainImageUrl, ...galleryUrls].filter(
    (image): image is string => Boolean(image),
  );

  const shortDescription =
    product.shortDescription?.trim() ||
    fallback?.shortDescription ||
    product.description.slice(0, 160);

  return {
    id: product._id,
    name: product.name,
    slug: product.slug,
    category: product.category?.title || fallback?.category || "Uncategorized",
    shortDescription,
    description: product.description,
    features: product.features ?? fallback?.features ?? [],
    specifications: product.specifications ?? fallback?.specifications ?? [],
    images: images.length > 0 ? images : fallback?.images ?? ["/placeholder.jpg"],
    // Price is currently not modeled in Sanity schema, so we preserve dummy fallback pricing.
    price: fallback?.price ?? 0,
  };
}

export async function getCatalogProducts(): Promise<CatalogProduct[]> {
  const sanityProducts = await getProducts();

  if (sanityProducts.length === 0) {
    return dummyProducts;
  }

  const fallbackBySlug = new Map(dummyProducts.map((item) => [item.slug, item]));

  return sanityProducts.map((product) =>
    mapSanityProductToCatalog(product, fallbackBySlug.get(product.slug)),
  );
}

export async function getFeaturedCatalogProducts(
  limit = 6,
): Promise<CatalogProduct[]> {
  const safeLimit = Math.max(1, limit);
  const featuredProducts = await getFeaturedProducts();

  if (featuredProducts.length === 0) {
    return dummyProducts.slice(0, safeLimit);
  }

  const fallbackBySlug = new Map(dummyProducts.map((item) => [item.slug, item]));

  return featuredProducts
    .map((product) =>
      mapSanityProductToCatalog(product, fallbackBySlug.get(product.slug)),
    )
    .slice(0, safeLimit);
}

export async function getCatalogProductBySlug(
  slug: string,
): Promise<CatalogProduct | null> {
  const normalizedSlug = slug.trim().toLowerCase();

  if (!normalizedSlug) {
    return null;
  }

  const fallback = dummyProducts.find(
    (product) => product.slug.toLowerCase() === normalizedSlug,
  );

  const sanityProduct = await getProductBySlug(normalizedSlug);

  if (sanityProduct) {
    return mapSanityProductToCatalog(sanityProduct, fallback);
  }

  return fallback ?? null;
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

function mapSanityProjectToCatalog(
  project: SanityProject,
  fallback?: CatalogProject,
): CatalogProject {
  const mainImage = getProjectImageUrl(project.images?.[0]);

  return {
    id: project._id,
    title: project.title,
    category: fallback?.category || "Installation",
    image: mainImage || fallback?.image || "/placeholder-project.jpg",
    description: project.description,
  };
}

export async function getCatalogProjects(): Promise<CatalogProject[]> {
  const projects = await getProjects();

  if (projects.length === 0) {
    return dummyProjects;
  }

  const fallbackByTitle = new Map(
    dummyProjects.map((project) => [project.title.toLowerCase(), project]),
  );

  return projects.map((project) =>
    mapSanityProjectToCatalog(
      project,
      fallbackByTitle.get(project.title.toLowerCase()),
    ),
  );
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
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
