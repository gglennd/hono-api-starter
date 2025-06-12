import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";

import type { AppBindings } from "@/types";

import packageInfo from "../../package.json";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({ strict: false });
}

function openapi() {
  const openAPI = createRouter();

  openAPI.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageInfo.version,
      title: "Open API",
    },
  });

  openAPI.get("/reference", Scalar({
    url: "/doc",
    layout: "classic",
    theme: "kepler",
    defaultHttpClient: {
      targetKey: "node",
      clientKey: "undici",
    },
  }));

  return openAPI;
}

export default openapi;
