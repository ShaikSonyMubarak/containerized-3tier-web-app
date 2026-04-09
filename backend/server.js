const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/test");

// Schema
const Data = mongoose.model("Data", { name: String });

// API
app.get("/data", async (req, res) => {
  const item = new Data({ name: "Hello from DB 🎉" });
  await item.save();
  res.send(item.name);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
