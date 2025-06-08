import { createRouter } from "@/create-router";
import index from "@/route.index";

import packageInfo from "../package.json";

const openApi = createRouter();
const router = [index] as const;

router.map(route => openApi.route("/", route));

openApi.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: packageInfo.version,
    title: "Open API",
  },

});

export default openApi;
