import type { StrapiCore as Strapi } from "../core";
import { rest } from "../core";
import {
  type Marriage,
  type Article,
  type Static,
  Announcement,
  DPP,
  Global,
  Homepage,
} from "../types";

/**
 * Organize plugins by it's type
 */
export function plugins(strapi: Strapi) {
  return {
    article: rest<Article>(strapi, "/articles"),
    static: rest<Static>(strapi, "/statics"),
    mariages: rest<Marriage>(strapi, "/an-marriages"),
    annoucements: rest<Announcement>(strapi, "/announcements"),
    dpp: rest<DPP>(strapi, "/dpp"),
    global: rest<Global>(strapi, "/global"),
    homepage: rest<Homepage>(strapi, "/homepage"),
  };
}
