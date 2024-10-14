/**
 * static router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::static.static", {
  config: {
    find: {
      middlewares: ["global::article-list"],
    },
    findOne: {
      middlewares: ["global::article-read"],
    },
  },
});
