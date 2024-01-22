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

    const existingEmail = await Users.findOne({ email: req.body.email });

    if (existingEmail) {
      res.status(400).json({
        status: "400",
        message: "Email Already Exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const CreateAccount = await Users.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      status: "200",
      message: "Account created Succesfully",
      data: CreateAccount,
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: error.message,
    });
  }
};

// User Login

export const login = async (req, res) => {
  try {
    // validating form fields

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "400",
        message: "Please Fill the Missing Fields",
      });
    }
    //validating email

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex)) {
      res.status(400).json({
        status: "400",
        message: "Invalid Email Format",
      });
    }

    // check email Existence

    const UserLogin = await Users.findOne({ email: req.body.email });

    if (!UserLogin) {
      return res.status(400).json({
        status: "400",
        message: "USER not Found",
      });
    }

    // check Password Match

    const isMatch = await bcrypt.compare(password, UserLogin.password);

    if (!isMatch) {
      return res.status(400).json({
        status: "400",
        message: "Incorrect Password",
      });
    }

    // Initialize Token

    const token = jwt.sign({ id: UserLogin._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_DATE,
    });

    return res.status(200).json({
      status: "200",
      message: "Logged In successfully",
      Users: UserLogin,
      Token: token,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: error.message,
    });
  }
};

// fetch Users

export const FetchUsers = async (req, res) => {
  try {
    const usersInfo = await Users.find({});
    res.status(200).json({
      status: "200",
      Message: "User retrieved Sucessfully",
      UserInfo: usersInfo,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: error.message,
    });
  }
};
