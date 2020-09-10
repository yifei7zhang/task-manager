const request = require("supertest");
require("dotenv").config();

const app = require("../src/app");
const User = require("../src/models/user");
const { userOneId, userOne, setUpDatabase } = require("./fixtures/db");

beforeEach(setUpDatabase);

// afterAll(() => {
//   mongoose.connection.close();
// });

test("Should signup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Yifei",
      email: "11@11.com",
      password: "Mypass666",
    })
    .expect(201);

  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  expect(response.body).toMatchObject({
    user: {
      name: "Yifei",
      email: "11@11.com",
    },
    token: user.tokens[0].token,
  });

  expect(user.password).not.toBe("Mypass666");
});

test("Should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  const user = await User.findById(response.body.user._id);

  expect(user).not.toBeNull();
  expect(response.body.token).toBe(user.tokens[1].token);
});

test("Should fail when login nonexistent user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "Password1",
    })
    .expect(400);
});

test("Should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not get profile for unauthenticated user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

test("should delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(userOneId);

  expect(user).toBeNull();
});

test("should no delete account for unuthed user", async () => {
  await request(app).delete("/users/me").send().expect(401);
});

test("should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("upload", "tests/fixtures/profile-pic.jpg")
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
  // Not the same; bc toBe uses === comparison (needs to be same obj in mem)
});

test("should update valid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: "James",
    })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.name).toEqual("James");
});

test("Should not update invalid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      location: "6ix",
    })
    .expect(400);
});
