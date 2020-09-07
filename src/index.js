const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const bcrypt = require("bcryptjs");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled.");
//   } else {
//     next();
//   }
// });

// Maintenance middleware
app.use((req, res, next) => {
  res
    .status(503)
    .send("the site is under maintenance, please check back soon.");
});

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

const jwt = require("jsonwebtoken");
const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisisarandomstring", {
    expiresIn: "7 days",
  });
  console.log(token);

  const data = jwt.verify(token, "thisisarandomstring");
  console.log(data);
};

myFunction();
