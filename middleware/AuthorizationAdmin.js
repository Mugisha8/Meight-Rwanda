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