import { Hono } from "hono";
import postsRoutes from "./routes/post.route";
import userRoutes from "./routes/user.route";

export type Env = {
  DB: D1Database;
  MY_VAR: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  return c.text("Hello, from Hono!");
});

app.route("/users", userRoutes);
app.route("/posts", postsRoutes);

export default app;
