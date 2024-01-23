import Users from "../models/UserModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//signUP

export const signUp = async (req, res) => {
  try {
    // validate Input fields

    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      res.status(400).json({
        status: "400",
        message: "Missing field",
      });
    }

    //email validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex)) {
      res.status(400).json({
        status: "400",
        message: "Invalid Email",
      });
    }

    if (password < 8) {
      res.status(400).json({
        status: "400",
        message: "Password must be atleast 8 characters long",
      });
    }