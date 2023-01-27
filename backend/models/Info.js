import mongoose from "mongoose";
import validator from "validator";
const infoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: 3,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    trim: true,
    maxLength: 80,
    validate: [validator.isEmail, "Please enter the valid email"],
  },
  contact: {
    type: String,
    required: [true, "Contact is required"],
    trim: true,
  },
});

const Info = mongoose.model("Info", infoSchema);

export default Info;
