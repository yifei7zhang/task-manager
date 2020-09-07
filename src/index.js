const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const bcrypt = require("bcryptjs");

const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`App is now listening on ${port}`);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("5f5584a0a052961a77bf5e95");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("5f558431a2a2501a05fa66d0");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
