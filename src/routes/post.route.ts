import { Hono } from "hono";
import {
  createPost,
  getPosts,
  getSinglePost,
} from "../controllers/post.controller";

const postRoute = new Hono();

postRoute.get("/", getPosts);
postRoute.get("/:id", getSinglePost);
postRoute.post("/", createPost);

export default postRoute;
