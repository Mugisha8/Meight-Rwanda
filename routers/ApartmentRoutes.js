import express from "express";
import {
  UpdateApartment,
  deleteApartment,
  getApartmentById,
  getApartments,
  postApartment,
} from "../controllers/ApartmentController.js";
import { AuthorizeAdmin } from "../middleware/AuthorizationAdmin.js";
import uploadfile from "../Helper/multer.js";

const ApartmentRoutes = express.Router();

ApartmentRoutes.post("/apartments",uploadfile.single("images"), AuthorizeAdmin, postApartment);
ApartmentRoutes.get("/apartments", getApartments);
ApartmentRoutes.get("/apartments/:id", getApartmentById);
ApartmentRoutes.put("/apartments/:id", AuthorizeAdmin, UpdateApartment);
ApartmentRoutes.delete("/apartments/:id", AuthorizeAdmin, deleteApartment);

export default ApartmentRoutes;
