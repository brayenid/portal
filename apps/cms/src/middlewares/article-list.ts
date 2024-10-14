/**
 * `article-list` middleware
 */

import type { Core } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    if (!ctx.query.populate) {
      const populate = ["category", "metaImage"];

      ctx.query.populate = populate;
    }

    await next();
  };
};
