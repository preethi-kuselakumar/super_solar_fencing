import { defineArrayMember, defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().min(2).max(140),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
        // Use an explicit uniqueness check so duplicate slugs cannot be published.
        isUnique: async (slug, context) => {
          if (!slug) {
            return true;
          }

          const { document, getClient } = context;
          const client = getClient({ apiVersion: "2026-04-01" });
          const documentId = document?._id?.replace(/^drafts\./, "");

          if (!documentId) {
            return client.fetch(
              'count(*[_type == "product" && slug.current == $slug]) == 0',
              { slug },
            );
          }

          return client.fetch(
            'count(*[_type == "product" && slug.current == $slug && !(_id in [$draft, $published])]) == 0',
            {
              slug,
              draft: `drafts.${documentId}`,
              published: documentId,
            },
          );
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      // Keep image fields URL-builder friendly for frontend usage.
      description:
        "Upload the primary product image. Use the image asset reference with @sanity/image-url.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required().min(5).max(160),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      description:
        "Additional product visuals for sliders and detail pages. Ordered as uploaded.",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (rule) => rule.required().min(5).max(160),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1).max(20),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(20).max(240),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 8,
      validation: (rule) => rule.required().min(50),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
          validation: (rule) => rule.required().min(2).max(120),
        }),
      ],
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(30)
          .custom((features) => {
            if (!Array.isArray(features)) {
              return true;
            }

            const normalized = features
              .filter((item): item is string => typeof item === "string")
              .map((item) => item.trim().toLowerCase());

            if (new Set(normalized).size !== normalized.length) {
              return "Features must be unique.";
            }

            return true;
          }),
    }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [defineArrayMember({ type: "specification" })],
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(40)
          .custom((specifications) => {
            if (!Array.isArray(specifications)) {
              return true;
            }

            const keys = specifications
              .map((item) =>
                typeof item === "object" && item !== null && "key" in item
                  ? String(item.key).trim().toLowerCase()
                  : "",
              )
              .filter(Boolean);

            if (new Set(keys).size !== keys.length) {
              return "Specification keys must be unique.";
            }

            return true;
          }),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featuredOrder",
      title: "Featured Order",
      type: "number",
      description:
        "Controls homepage featured product order (lower number appears first).",
      hidden: ({ document }) => !document?.isFeatured,
      validation: (rule) =>
        rule.integer().min(1).max(9999).custom((value, context) => {
          const isFeatured = Boolean(context.document?.isFeatured);

          if (isFeatured && (value === undefined || value === null)) {
            return "Set Featured Order when the product is marked as featured.";
          }

          return true;
        }),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.title",
      media: "mainImage",
      featured: "isFeatured",
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title,
        subtitle: featured
          ? `${subtitle || "Uncategorized"} - Featured`
          : subtitle || "Uncategorized",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Featured Order",
      name: "featuredOrder",
      by: [
        { field: "isFeatured", direction: "desc" },
        { field: "featuredOrder", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
    {
      title: "Name (A-Z)",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
});
