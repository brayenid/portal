import { Metadata } from "next";
import { Image } from "@pkrbt/openapi";
import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";
import { addPrefix } from "./prefix";

export type ParokiMeta = {
  title: string;
  description: string;
  image: Required<Image>;
  type: OpenGraphType;
};

export function generateMeta({
  title,
  description,
  image,
  type,
}: ParokiMeta): Metadata {
  const images = [];

  if (image) {
    images.push({
      url: addPrefix(image.url),
      width: image.width,
      height: image.height,
      alt: image.alternativeText,
    });
  }

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      images,
    },
    twitter: {
      images,
    },
  };

  return metadata;
}
