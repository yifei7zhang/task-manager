require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5f4853f5df454943a313a12e")
//   .then(task => {
//     console.log("task deleted: ", task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  // await Task.findByIdAndDelete(id); //This also works
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5f4a9e7dfa54450d170aba70")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
