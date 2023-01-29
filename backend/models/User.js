import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true,
    maxLength: 30,
  },

  email: {
    type: String,
    required: [true, "Email is required!"],
    trim: true,
    maxLength: 80,
    validate: [validator.isEmail, "Please enter the valid email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [8, "Password should be greater than 8 characters"],
    trim: true,
  },

  role: {
    type: String,
    default: "user",
  },

  facebookLink: {
    type: String,
    validate: [validator.isURL, "Please enter the valid url"],
    trim: true,
  },

  instagramLink: {
    type: String,
    validate: [validator.isURL, "Please enter the valid url"],
    trim: true,
  },

  linkedinLink: {
    type: String,
    validate: [validator.isURL, "Please enter the valid url"],
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isValidPassword = async function (oldPassword) {
  return await bcrypt.compare(oldPassword, this.password);
};

const User = mongoose.model("user", userSchema);

export default User;
