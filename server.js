const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 3000;
const PASS = process.env.PASS;
const Thread = require("./models/Thread");

app.use(express.static("public"));

mongoose
  .connect(
    `mongodb+srv://moriw0:${PASS}@cluster0.vifq9.mongodb.net/threads?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/api/v1/threads", async (req, res) => {
  try {
    const allThreads = await Thread.find({});
    res.status(200).json(allThreads);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/thread", async (req, res) => {
  try {
    const createThread = await Thread.create(req.body);
    res.status(200).json(createThread);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, console.log("server running"));
