/**
 * dpp router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::dpp.dpp", {
  config: {
    find: {
      middlewares: ["global::dpp-list"],
    },
  },
});
