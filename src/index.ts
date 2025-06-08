import { Hono } from "hono";
import { requestId } from "hono/request-id";

import type { AppBindings } from "@/types";

import notFound from "@/not-found";
import onError from "@/on-error";
import openApi from "@/openapi";
import { logger } from "@/pino-logger";

const app = new Hono<AppBindings>({ strict: false });

app.use(requestId());
app.use(logger());

app.get("/", c => c.text("Hono!"));

app.route("/", openApi);

app.onError(onError);
app.notFound(notFound);

export default app;
