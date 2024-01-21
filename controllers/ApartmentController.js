import Apartments from "../models/apartmentsModal.js";

// post apartment
export const postApartment = async (req, res) => {
  try {
    const existingName = await Apartments.findOne({ name: req.body.name });

    if (existingName) {
      res.status(400).json({
        status:"400",
        message: "Apartment name Already exists",
      });
    }

    const apartment = await Apartments.create(req.body);
    res
      .status(200)
      .json({ message: "Apartments Added Successfully", apartment });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

//retrieve apartments
export const getApartments = async (req, res) => {
  try {
    const apartment = await Apartments.find({});
    res.status(200).json(apartment);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

//retrieve apartment by id

export const getApartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await Apartments.findById(id);
    if (!apartment) {
      res.status(404).json(`Apartment of this Id ${id} not found`);
    }
    res.status(200).json(apartment);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

// update Apartment

export const UpdateApartment = async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await Apartments.findByIdAndUpdate(id, req.body);
    if (!apartment) {
      res.status(404).json(`Invalid Id ${id}`);
    }

    const UpdateApartment = await Apartments.findById(id);
    res.status(200).json(UpdateApartment);
  } catch (error) {
    res.status(500), res.json({ message: error.message });
  }
};

// Deleting Product

export const deleteApartment = async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await Apartments.findByIdAndDelete(id);
    if (!apartment) {
      res.status(404).json(`Invalid ID ${id} not found`);
    }
    res.status(200).json(`successfully Deleted`);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};
