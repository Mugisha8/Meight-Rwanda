import Jwt from "jsonwebtoken";

import Users from "../models/UserModal";

export const AuthorizeAdmin = async (req, res) => {
    let token;
  
    try {
      if (
        req.headers.authorization &&
        req.headers.authorization.startswith("Bearer ")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (!token) {
        return res.status(401).json({
          status: "401",
          message: "This operation Requires To login",
        });
      }
      
      const decoded = await Jwt.verify(token, process.env.JW_SECRET);
      const loggedUser = await Users.findById(decoded.id);
  
      if (!loggedUser) {
        return res.status(401).json({
          status: "401",
          message: "Token Has expired, please login again",
        });
      }
