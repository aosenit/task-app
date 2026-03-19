import express from "express";

const tasks = [
  { id: 1, title: "Task 1", description: "Task 1 description" },
  { id: 2, title: "Task 2", description: "Task 2 description" },
  { id: 3, title: "Task 3", description: "Task 3 description" },
];

const app = express();

app.use(express.json());

app.get("/api/v1/tasks", (req, res) => {
  console.log("this is a task app");
  res.json({
    message: "this is a task app",
    data: {
      tasks: tasks,
    },
  });
});

app.post("/api/v1/tasks", (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).json({
    message: "Task created successfully",
    data: { task: newTask },
    error: false,
  });
});

app.patch("/api/v1/tasks/:id", (req, res) => {
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
});

app.delete("/api/v1/tasks/:id", (req, res) => {
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
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
