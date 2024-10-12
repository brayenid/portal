import invariant from "tiny-invariant";

invariant(
  process.env.GOOGLE_ANALYTICS_ID,
  "GOOGLE_ANALYTICS_ID env not configured",
);
invariant(process.env.STRAPI_TOKEN, "STRAPI_TOKEN env not configured");

export const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID;
export const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
