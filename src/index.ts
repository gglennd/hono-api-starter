import createApp from "@/lib/create-app";
import openapi from "@/lib/openapi";
import index from "@/routes/route.index";

const openAPI = openapi();
const router = [index] as const;
router.map(route => openAPI.route("/api", route));

const app = createApp();

app.get("/", c => c.text("Hono!"));
app.route("/", openAPI);

export default app;
