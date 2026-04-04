import { defineField, defineType } from "sanity";

const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(2).max(140),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      rows: 10,
      validation: (rule) => rule.required().min(60).max(6000),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description:
        "Primary about-page visual. Asset reference can be consumed directly by the frontend image URL builder.",
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
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
});

export default aboutPage;
export { aboutPage as aboutPageType };
