import api from "@/utils/strapi";
import type { Homepage } from "@pkrbt/openapi";
import invariant from "tiny-invariant";

export async function fetchHomepage(): Promise<Required<Homepage>> {
  const { data } = await api.fetch.GET("/homepage", {
    params: {
      query: {
        populate: "*",
      },
    },
  });
  const homepage = data?.data as Required<Homepage>;

  invariant(homepage, "Homepage section not configured in cms");

  return homepage;
}
