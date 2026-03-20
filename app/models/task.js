import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
      maxlength: [150, "title cannot exceed 150 characters"],
    },
    description: {
      type: String,
      trim: true,
      default: "",
      maxlength: [1000, "description cannot exceed 1000 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
