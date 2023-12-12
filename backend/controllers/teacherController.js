import User from "../models/UserSchema.js";
import Teacher from "../models/TeacherScheme.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Teacher.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (err) {
    res
      .status(404)
      .json({ success: false, message: "Failed to update", data: updatedDoctor });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await Teacher.findByIdAndUpdate(id);

    res.status(404).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};
export const getsingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const teacher = await Teacher.findById(id).select("-password");

    res.status(404).json({
      success: true,
      message: "Teacher Found",
      data: teacher,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "No User found" });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const teachers = await Teacher.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "teachers found",
      data: teachers,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Not found" });
  }
};
