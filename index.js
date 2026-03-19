import express from "express";

const app = express();

app.get("/api/v1/tasks", (req, res) => {
  console.log("this is a task app");
  res.json({
    message: "this is a task app",
    data: {
      tasks: [],
    },
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
