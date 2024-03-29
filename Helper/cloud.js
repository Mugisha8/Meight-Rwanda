import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  

export const uploadToCloud = async (file, res) => {
    try {
      const apartmentImage = await cloudinary.uploader.upload(file.path, {
        folder: "apartmentImages",
        use_filename: true,
      });
      return apartmentImage;
    }
  
    catch (error) {
        return res.status(500).json({
          status: "400",
          message: error.message,
        });
      }
    };