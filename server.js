import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ApartmentRoutes from "./routers/ApartmentRoutes.js";
import cors from "cors";
import UserRoutes from "./routers/UserRoutes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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

// start of Documentation

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Meight Rwanda - documentation",
      version: "1.0.0",
    },

    servers: [
      {
        url: `localhost:8888/`,
      },
    ],
    security: [
      {
        BearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["Docs/ApartmentsDoc.js", "Docs/UserDoc.js"], //  Determining documentation file
};
const swaggerSpec = swaggerJSDoc(options);

// end of Documentation

//routings

app.get("/", (req, res) => {
  res.send("Welcome to Meight Rwanda");
});
app.use("/Documentation", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/meight", ApartmentRoutes);
app.use("/meight", UserRoutes);

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
