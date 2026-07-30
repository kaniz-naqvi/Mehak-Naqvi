import { MetadataRoute } from "next";

const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://mehak-naqvi.vercel.app"
).replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
