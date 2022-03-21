const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PASS = process.env.PASS;

const PORT = 3000;

app.use(express.static("public"));

mongoose
  .connect(
    `mongodb+srv://moriw0:${PASS}@cluster0.vifq9.mongodb.net/threads?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, console.log("server running"));
