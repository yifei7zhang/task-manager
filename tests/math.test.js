const {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require("../src/math");

// 2. Create "Should convert 32 F to 0 C"
// 3. Create "Should convert 0 C to 32 F"

test("should convert 32F to 0C", () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test("should convert 0C to 32F", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

// test("async test demo", done => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

test("Should add two numbers", done => {
  add(2, 3).then(sum => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add two numbers async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
