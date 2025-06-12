import { Hono } from "hono";
import { requestId } from "hono/request-id";

import type { AppBindings } from "@/types";

import notFound from "@/middlewares/not-found";
import onError from "@/middlewares/on-error";
import { logger } from "@/middlewares/pino-logger";

function createApp() {
  const app = new Hono<AppBindings>({ strict: false });

  app.use(requestId());
  app.use(logger());

  app.onError(onError);
  app.notFound(notFound);
  return app;
}

export default createApp;
