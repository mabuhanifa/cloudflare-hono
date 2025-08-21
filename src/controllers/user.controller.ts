import { Context } from "hono";
import { findAllUsers, findUserById } from "../services/user.service";

export const getUsers = async (c: Context) => {
  const users = await findAllUsers();
  return c.json(users);
};

export const getUserById = async (c: Context) => {
  const id = c.req.param("id");
  const user = await findUserById(id);
  return user ? c.json(user) : c.notFound();
};
