import express from "express";
import {
  DeleteUser,
  FetchUsers,
  UpdateUser,
  login,
  signUp,
} from "../controllers/UserController.js";
import { AuthorizeAdmin } from "../middleware/AuthorizationAdmin.js";

const UserRoutes = express.Router();

UserRoutes.post("/signup", signUp);
UserRoutes.post("/login", login);
UserRoutes.get("/users", AuthorizeAdmin, FetchUsers);
UserRoutes.delete("/users/:id", AuthorizeAdmin, DeleteUser);
UserRoutes.put("/users/:id", AuthorizeAdmin, UpdateUser);

export default UserRoutes;
