import mongoose from "mongoose";

const apartmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the apartment name"],
    },

    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Apartments = mongoose.model("apartments", apartmentSchema);
export default Apartments;
