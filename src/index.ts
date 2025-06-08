import { Hono } from "hono";

import notFound from "@/not-found";
import onError from "@/on-error";

const app = new Hono();

app.get("/", c => c.text("Hono!"));

app.onError(onError);
app.notFound(notFound);

export default app;
