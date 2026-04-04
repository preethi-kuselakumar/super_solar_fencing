import { defineField, defineType } from "sanity";

const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(2).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        // Explicit uniqueness prevents duplicate category routes in the frontend.
        isUnique: async (slug, context) => {
          if (!slug) {
            return true;
          }

          const { document, getClient } = context;
          const client = getClient({ apiVersion: "2026-04-01" });
          const documentId = document?._id?.replace(/^drafts\./, "");

          if (!documentId) {
            return client.fetch(
              'count(*[_type == "category" && slug.current == $slug]) == 0',
              { slug },
            );
          }

          return client.fetch(
            'count(*[_type == "category" && slug.current == $slug && !(_id in [$draft, $published])]) == 0',
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
  orderings: [
    {
      title: "Title (A-Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
});

export default category;
export { category as categoryType };
