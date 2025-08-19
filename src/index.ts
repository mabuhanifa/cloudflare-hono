import { Hono } from "hono";

export type Env = {
  DB: D1Database;
  MY_VAR: string;
  private: string; // Example of a private variable
};

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  return c.text(`Hello Hono! by ${c.env.MY_VAR} , ${c.env.private}`);
});

export default app;
