import User from "../models/UserSchema.js";
import Teacher from "../models/TeacherScheme.js"

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generatetoken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRETE_KEY,
    {
      expiresIn: "15d",
    }
  );
};
export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = null;
    if (role == "Student") {
      user = await User.findOne({ email }); // Fix typo here
    } else if (role == "Teacher") {
      user = await Teacher.findOne({ email });
      // Fix typo here
    }

    if (user) {
      return res.status(400).json({ message: "User already exists" });
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
      user = new Teacher({
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
  const { email, password } = req.body;
  try {
    let user = null;

    const student = await User.findOne({ email });
    const teacher = await Teacher.findOne({ email });

    if (teacher) {
      user = teacher;
    }
    if (student) {
      user = student;
    }

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(400).json({
        status: false,
        message: "Invalid credentials",
      });
    }
    const token = generatetoken(user);

    const { password, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "Successfully login",
      token,
      data: { ...rest },
      role,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};
