// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID, DBRef } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log(`Unable to connect to database! ${error}`);
    }
    const db = client.db(databaseName);
    // db.collection("users").findOne(
    //   { _id: ObjectID("5f4802f558f7b8292c574828") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );
    // db.collection("users")
    //   .find({ age: 20 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 20 })
    //   .count((error, users) => {
    //     console.log(users);
    //   });

    db.collection("tasks").findOne(
      {
        _id: ObjectID("5f48052410f34629974344a8"),
      },
      (e, res) => {
        console.log(res);
      }
    );
    db.collection("tasks")
      .find({
        completed: false,
      })
      .toArray((e, res) => {
        console.log(res);
      });
  }
);
