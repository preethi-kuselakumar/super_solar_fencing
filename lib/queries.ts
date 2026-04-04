import { groq } from "next-sanity";

const productProjection = groq`{
  _id,
  _createdAt,
  _updatedAt,
  name,
  "slug": slug.current,
  shortDescription,
  description,
  features,
  specifications[]{
    key,
    value
  },
  isFeatured,
  featuredOrder,
  category->{
    _id,
    title,
    "slug": slug.current
  },
  mainImage{
    ...,
    asset->{
      _id,
      url,
      metadata{
        dimensions,
        lqip
      }
    }
  },
  gallery[]{
    ...,
    asset->{
      _id,
      url,
      metadata{
        dimensions,
        lqip
      }
    }
  }
}`;

export const allProductsQuery = groq`
  *[_type == "product"]
  | order(_createdAt desc)
  ${productProjection}
`;

export const featuredProductsQuery = groq`
  *[_type == "product" && isFeatured == true]
  | order(coalesce(featuredOrder, 999999) asc, _createdAt desc)
  ${productProjection}
`;

export const productBySlugQuery = groq`
  *[_type == "product" && lower(slug.current) == lower($slug)][0]
  ${productProjection}
`;

const projectProjection = groq`{
  _id,
  _createdAt,
  _updatedAt,
  title,
  description,
  images[]{
    ...,
    asset->{
      _id,
      url,
      metadata{
        dimensions,
        lqip
      }
    }
  }
}`;

export const allProjectsQuery = groq`
  *[_type == "project"]
  | order(_createdAt desc)
  ${projectProjection}
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"]
  | order(_updatedAt desc)[0]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    content,
    image{
      ...,
      asset->{
        _id,
        url,
        metadata{
          dimensions,
          lqip
        }
      }
    }
  }
`;
