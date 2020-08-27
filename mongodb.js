// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);
console.log(id.getTimestamp());
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log(`Unable to connect to database! ${error}`);
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "a Bot",
    //     age: 20,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     { name: "bob", age: 33 },
    //     { name: "the builder", age: 20 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert!");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "finish this challenge",
    //       completed: true,
    //     },
    //     {
    //       description: "get an internship in cali",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
