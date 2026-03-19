import tasks from "../data/task.js";

const getTasks = (req, res) => {
  res.json({
    message: "this is a task app",
    data: {
      tasks: tasks,
    },
    error: false,
  });
};

const createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.json({
    message: "Task created successfully",
    data: { task: newTask },
    error: false,
  });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    return res
      .status(404)
      .json({ message: "Task not found", error: true, data: null });
  }
  task.title = title;
  task.description = description;
  res.json({
    message: "Task updated successfully",
    data: { task: task },
    error: false,
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    return res
      .status(404)
      .json({ message: "Task not found", error: true, data: null });
  }
  tasks.splice(tasks.indexOf(task), 1);
  res.json({
    message: `Task ${id} deleted successfully`,
    error: false,
  });
};

export { getTasks, createTask, updateTask, deleteTask };
