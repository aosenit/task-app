import express from "express";
import taskRoutes from "./app/routes/task.js";

const app = express();

app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
