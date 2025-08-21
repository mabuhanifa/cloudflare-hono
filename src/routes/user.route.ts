import { Hono } from "hono";
import { getUserById, getUsers } from "../controllers/user.controller";

const userRoute = new Hono();

userRoute.get("/", getUsers);
userRoute.get("/:id", getUserById);

export default userRoute;
