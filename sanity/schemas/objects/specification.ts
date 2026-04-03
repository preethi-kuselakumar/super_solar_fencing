import { defineField, defineType } from "sanity";

export const specificationType = defineType({
  name: "specification",
  title: "Specification",
  type: "object",
  fields: [
    defineField({
      name: "key",
      title: "Key",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(2)
          .max(80)
          .custom((value) => {
            if (typeof value !== "string") {
              return true;
            }

            return value.trim().length >= 2
              ? true
              : "Key must contain at least 2 non-space characters.";
          }),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(240)
          .custom((value) => {
            if (typeof value !== "string") {
              return true;
            }

            return value.trim().length > 0 ? true : "Value cannot be empty.";
          }),
    }),
  ],
  preview: {
    select: {
      title: "key",
      subtitle: "value",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled specification",
        subtitle,
      };
    },
  },
});
