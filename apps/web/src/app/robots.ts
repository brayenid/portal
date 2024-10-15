import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default function robots(): MetadataRoute.Robots {
  const prefix = headers().get("x-origin");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${prefix}/sitemap.xml`, `${prefix}/berita/sitemap.xml`],
  };
}
