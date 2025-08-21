import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { posts } from "../db/schema";

type PostInput = {
  title: string;
  content: string;
};

export const allPosts = async (DB: D1Database) => {
  const db = drizzle(DB);
  return await db.select().from(posts).all();
};

export const singlePost = async (DB: D1Database, id: string) => {
  const db = drizzle(DB);
  const result = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return result[0] || null;
};

export const addPost = async (DB: D1Database, postData: PostInput) => {
  const db = drizzle(DB);
  return await db.insert(posts).values(postData).returning();
};
