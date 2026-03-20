import "dotenv/config";
import express from "express";
import connectDB from "./app/data/mongoDb.js";
import taskRoutes from "./app/routes/task.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Task API is running",
  });
});

app.use((error, req, res, next) => {
  if (error.name === "ValidationError") {
    return res.status(400).json({
      message: error.message,
      data: null,
      error: true,
    });
  }

  // Keep internal details out of API responses.
  console.error(error);
  return res.status(500).json({
    message: "Internal server error",
    data: null,
    error: true,
  });
});

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
