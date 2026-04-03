const productProjection = `
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
  category->{
    _id,
    title,
    "slug": slug.current
  },
  mainImage{
    alt,
    hotspot,
    crop,
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
    alt,
    hotspot,
    crop,
    asset->{
      _id,
      url,
      metadata{
        dimensions,
        lqip
      }
    }
  }
`;

export const allProductsQuery = `*[_type == "product"] | order(name asc) {
  ${productProjection}
}`;

export const featuredProductsQuery = `*[_type == "product" && isFeatured == true] | order(_createdAt desc) {
  ${productProjection}
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  ${productProjection}
}`;
