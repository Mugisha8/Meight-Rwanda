import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ApartmentRoutes from "./routers/ApartmentRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cross origin

// const corsOptions ={
//   origin:"www.example.com",
//   optionsSuccessStatus:200
// }

app.use(cors());

// env config

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

// end of env config

//routings

app.get("/", (req, res) => {
  res.send("Welcome to Meight Rwanda");
});

app.use("/meight", ApartmentRoutes);

// end of routings

//db connection

mongoose
  .connect(MONGO_URL)

  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Meight connection on Port ${PORT} `);
    });
  })
  .catch((error) => {
    console.log("failed to connect to database", error);
  });
