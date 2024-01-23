import Users from "../models/UserModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//signUP

export const signUp = async (req, res) => {
  try {
    // validate Input fields

    const { firstname, lastname, email, password } = req.body;