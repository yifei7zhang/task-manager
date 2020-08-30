require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5f4852a3b417723f87b11168", { age: 666 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 666 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log("catching all errors: ", e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5f4852a3b417723f87b11168", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
