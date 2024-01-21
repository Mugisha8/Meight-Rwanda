import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Your firstname required"],
    },

    lastname: {
      type: String,
      required: [true, "Your Lastname is required"],
    },

    email: {
      type: String,
      required: [true, "Your Email is required"],
    },

    password: {
      type: String,
      required: [true, "Your Password is required"],
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", UserSchema);

export default Users;
