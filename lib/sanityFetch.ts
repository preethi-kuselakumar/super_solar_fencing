import "server-only";

import { unstable_cache } from "next/cache";

import { sanityClient } from "@/lib/sanityClient";
import {
  allProductsQuery,
  allProjectsQuery,
  aboutPageQuery,
  featuredProductsQuery,
  productBySlugQuery,
} from "@/lib/queries";
import type { AboutPage, Product, Project } from "@/lib/types";

const SANITY_REVALIDATE_SECONDS = 300;
const SANITY_FAST_REVALIDATE_SECONDS = 30;

async function fetchProducts(): Promise<Product[]> {
  const products = await sanityClient.fetch<Product[]>(allProductsQuery);
  return products ?? [];
}

async function fetchFeaturedProducts(): Promise<Product[]> {
  const products = await sanityClient.fetch<Product[]>(featuredProductsQuery);
  return products ?? [];
}

async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const normalizedSlug = slug.trim();

  if (!normalizedSlug) {
    return null;
  }

  const product = await sanityClient.fetch<Product | null>(productBySlugQuery, {
    slug: normalizedSlug,
  });

  return product ?? null;
}

async function fetchProjects(): Promise<Project[]> {
  const projects = await sanityClient
    .withConfig({ useCdn: false })
    .fetch<Project[]>(allProjectsQuery);
  return projects ?? [];
}

async function fetchAboutPage(): Promise<AboutPage | null> {
  const aboutPage = await sanityClient
    .withConfig({ useCdn: false })
    .fetch<AboutPage | null>(aboutPageQuery);
  return aboutPage ?? null;
}

export const getProducts = unstable_cache(fetchProducts, ["sanity-products"], {
  revalidate: SANITY_REVALIDATE_SECONDS,
  tags: ["sanity", "sanity:products"],
});

export const getFeaturedProducts = unstable_cache(
  fetchFeaturedProducts,
  ["sanity-featured-products"],
  {
    revalidate: SANITY_REVALIDATE_SECONDS,
    tags: ["sanity", "sanity:products", "sanity:featured"],
  },
);

export const getProductBySlug = unstable_cache(
  fetchProductBySlug,
  ["sanity-product-by-slug-v2"],
  {
    revalidate: SANITY_REVALIDATE_SECONDS,
    tags: ["sanity", "sanity:products"],
  },
);

export const getProjects = unstable_cache(fetchProjects, ["sanity-projects"], {
  revalidate: SANITY_FAST_REVALIDATE_SECONDS,
  tags: ["sanity", "sanity:projects"],
});

export const getAboutPage = unstable_cache(fetchAboutPage, ["sanity-about-page"], {
  revalidate: SANITY_FAST_REVALIDATE_SECONDS,
  tags: ["sanity", "sanity:about"],
});
