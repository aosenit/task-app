import mongoose from "mongoose";
import Task from "../models/task.js";

const validateObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const getAllTasks = async () => {
  return Task.find().sort({ createdAt: -1 });
};

const getTaskById = async (id) => {
  if (!validateObjectId(id)) {
    return null;
  }

  return Task.findById(id);
};

const createTask = async (payload) => {
  return Task.create(payload);
};

const updateTaskById = async (id, payload) => {
  if (!validateObjectId(id)) {
    return null;
  }

  return Task.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteTaskById = async (id) => {
  if (!validateObjectId(id)) {
    return null;
  }

  return Task.findByIdAndDelete(id);
};

export { getAllTasks, getTaskById, createTask, updateTaskById, deleteTaskById };
