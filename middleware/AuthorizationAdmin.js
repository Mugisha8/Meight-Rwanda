import Jwt from "jsonwebtoken";

import Users from "../models/UserModal.js";

export const AuthorizeAdmin = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        status: "401",
        message: "This operation Requires To login",
      });
    }

    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
    const loggedUser = await Users.findById(decoded.id);

    if (!loggedUser) {
      return res.status(401).json({
        status: "401",
        message: "Token Has expired, please login again",
      });
    }

    if (loggedUser.role !== "admin") {
      return res.status(401).json({
        status: "401",
        message: "This Operation Requires Admin To login",
      });
    } else {
      req.log = loggedUser;
      next();
    }
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: error.message,
    });
  }
};
