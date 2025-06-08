import { Scalar } from "@scalar/hono-api-reference";

import { createRouter } from "@/create-router";
import index from "@/route.index";

import packageInfo from "../package.json";

const openApi = createRouter();

openApi.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: packageInfo.version,
    title: "Open API",
  },
});

openApi.get("/reference", Scalar({ url: "/doc" }));

const router = [index] as const;
router.map(route => openApi.route("/", route));

export default openApi;
