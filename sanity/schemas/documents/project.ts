import { defineArrayMember, defineField, defineType } from "sanity";

const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(2).max(140),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      description:
        "Project gallery used on works pages and detail views. First image is used in previews.",
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
      validation: (rule) => rule.required().min(1).max(30),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 8,
      validation: (rule) => rule.required().min(40).max(4000),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
  },
  orderings: [
    {
      title: "Newest",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
    {
      title: "Title (A-Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});

export default project;
export { project as projectType };
