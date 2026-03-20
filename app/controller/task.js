import {
  getAllTasks,
  getTaskById,
  createTask as createTaskRecord,
  updateTaskById,
  deleteTaskById,
} from "../services/taskService.js";

const getTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasks();

    res.status(200).json({
      message: "Tasks fetched successfully",
      data: { tasks },
      error: false,
    });
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await getTaskById(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
        data: null,
        error: true,
      });
    }

    res.status(200).json({
      message: "Task fetched successfully",
      data: { task },
      error: false,
    });
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;

    if (!title?.trim()) {
      return res.status(400).json({
        message: "title is required",
        data: null,
        error: true,
      });
    }

    const newTask = await createTaskRecord({ title, description, completed });

    res.status(201).json({
      message: "Task created successfully",
      data: { task: newTask },
      error: false,
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const task = await updateTaskById(id, updates);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
        data: null,
        error: true,
      });
    }

    res.status(200).json({
      message: "Task updated successfully",
      data: { task },
      error: false,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTaskById(id);

    if (!deletedTask) {
      return res
        .status(404)
        .json({ message: "Task not found", error: true, data: null });
    }

    res.status(200).json({
      message: `Task ${id} deleted successfully`,
      data: { task: deletedTask },
      error: false,
    });
  } catch (error) {
    next(error);
  }
};

export { getTasks, getTask, createTask, updateTask, deleteTask };
