/**
 * article router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::article.article", {
  config: {
    find: {
      middlewares: ["global::article-list"],
    },
    findOne: {
      middlewares: ["global::article-read"],
    },
  },
});
