import express from "express";
import {
  UpdateApartment,
  deleteApartment,
  getApartmentById,
  getApartments,
  postApartment,
} from "../controllers/ApartmentController.js";

const ApartmentRoutes = express.Router();

ApartmentRoutes.post("/apartments", postApartment);
ApartmentRoutes.get("/apartments", getApartments);
ApartmentRoutes.get("/apartments/:id", getApartmentById);
ApartmentRoutes.put("/apartments/:id", UpdateApartment);
ApartmentRoutes.delete("/apartments/:id", deleteApartment);

export default ApartmentRoutes;
