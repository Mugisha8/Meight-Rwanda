import express from "express";
import { FetchUsers, login, signUp } from "../controllers/UserController.js";

const UserRoutes = express.Router();

UserRoutes.post("/signup", signUp);
UserRoutes.post("/login", login);
UserRoutes.get("/users", FetchUsers);

export default UserRoutes;
