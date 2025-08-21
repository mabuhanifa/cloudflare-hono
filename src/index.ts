import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { posts } from "./db/schema";
import userRoutes from "./routes/user.route";

export type Env = {
  DB: D1Database;
  MY_VAR: string;
};

const app = new Hono<{ Bindings: Env }>();

app
  .get("/posts", async (c) => {
    const db = drizzle(c.env.DB);
    const results = await db.select().from(posts).all();
    return c.json(results);
  })
  .post("/posts", async (c) => {
    const db = drizzle(c.env.DB);
    const { title, content } = await c.req.json();
    const result = await db
      .insert(posts)
      .values({
        title,
        content,
      })
      .returning();
    return c.json(result);
  })
  .get("/", (c) => {
    return c.text("Hello, World!");
  });

app.route("/users", userRoutes);

export default app;
