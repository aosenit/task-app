import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("this is a task app");
  res.send("this is a task app");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
