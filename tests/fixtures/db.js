const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = require("../../src/models/user");
const Task = require("../../src/models/task");

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: "Bob",
  email: "bob@bob.com",
  password: "Bobspass!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_TOKEN),
    },
  ],
};

const userTwoId = new mongoose.Types.ObjectId();

const userTwo = {
  _id: userTwoId,
  name: "Carlos",
  email: "carlos@car.com",
  password: "Carlospass!",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_TOKEN),
    },
  ],
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: "First Task",
  completed: false,
  owner: userOne._id,
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: "Second Task",
  completed: false,
  owner: userOne._id,
};

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: "Third Task",
  completed: false,
  owner: userTwo._id,
};

const setUpDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  userOneId,
  userOne,
  userTwoId,
  userTwo,
  taskOne,
  taskTwo,
  taskThree,
  setUpDatabase,
};
