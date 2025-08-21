import { Context } from "hono";
import { addPost, allPosts, singlePost } from "../services/post.service";

export const getPosts = async (c: Context) => {
  const db = c.env.DB;
  const posts = await allPosts(db);
  return c.json(posts);
};

export const getSinglePost = async (c: Context) => {
  const db = c.env.DB;
  const id = c.req.param("id");
  const posts = await singlePost(db, id);
  return c.json(posts);
};

export const createPost = async (c: Context) => {
  const db = c.env.DB;
  const { title, content } = await c.req.json();
  const newPost = await addPost(db, { title, content });
  return c.json(newPost);
};
