import User from "../models/UserSchema.js";
import TeacherScheme from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = null;
    if (role == "Student") {
      user =await user.find({ email });
    } else if (role == "Teacher") {
      user =await TeacherScheme.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role == "Student") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    if (role == "Teacher") {
      user = new TeacherScheme({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    res.status(500).json({
        success: false,
        message: "Internal server error, Try again later",
      });
  }
};
export const login = async (req, res) => {
  try {
  } catch (err) {}
};
