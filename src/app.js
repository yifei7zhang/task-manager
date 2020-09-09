const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRouter);
app.use(taskRouter);

// Middleware
// new request ==> do something ==> run route handler
// Can prevent route handler; do something, etc.

app.get("/", (req, res) => {
  res.send("App online!");
});

module.exports = app;
