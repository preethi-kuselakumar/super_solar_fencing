import { createImageUrlBuilder } from "@sanity/image-url";

import { sanityClient } from "@/lib/sanityClient";

const builder = createImageUrlBuilder(sanityClient);

// Centralized image helper keeps URL generation logic out of UI components.
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
