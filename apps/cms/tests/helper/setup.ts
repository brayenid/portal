import { afterAll, beforeAll } from "vitest";
import { bootstrap as doBootstrap } from "./bootstrap";

async function cleanupStrapi() {}

export async function bootstrap() {
  await doBootstrap();
}
