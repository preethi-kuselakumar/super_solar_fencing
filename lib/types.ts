export type SanityImage = {
  _type?: "image";
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  asset?: {
    _id?: string;
    _ref?: string;
    _type?: "reference";
    url?: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
        aspectRatio: number;
      };
      lqip?: string;
    };
  } | null;
};

export type Specification = {
  key: string;
  value: string;
};

export type Category = {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  slug: string;
  shortDescription?: string;
};

export type Product = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  slug: string;
  shortDescription?: string;
  description: string;
  features: string[];
  specifications: Specification[];
  category?: Category | null;
  mainImage?: SanityImage | null;
  gallery?: SanityImage[];
  isFeatured?: boolean;
  featuredOrder?: number | null;
};

export type Project = {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  description: string;
  images: SanityImage[];
};

export type AboutPage = {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  content: string;
  image?: SanityImage | null;
};

export type Service = {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  slug: string;
  shortDescription?: string;
  description: string;
  displayOrder?: number;
  isActive?: boolean;
  image?: SanityImage | null;
};

export type CatalogProduct = {
  id: string;
  name: string;
  slug: string;
  category: string;
  categoryShortDescription?: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: Specification[];
  images: string[];
  price?: number;
  offer?: string;
  varieties?: string[];
};

export type CatalogProject = {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
};

export type CatalogService = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
};
