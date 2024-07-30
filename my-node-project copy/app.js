const fs = require("fs").promises;
const _ = require("lodash");
const EventEmitter = require("events");
const crypto = require("crypto");
const prettier = require("prettier");
const math = require("./math");

const eventEmitter = new EventEmitter();

eventEmitter.on("dataProcessed", (data) => {
  console.log("Data has been processed:", data);
});

async function processData() {
  try {
    // Reading and parsing JSON data from a file
    const data = await fs.readFile("data.json", "utf8");
    const jsonData = JSON.parse(data);

    // Using a lodash function
    const reversedHobbies = _.reverse([...jsonData.hobbies]);

    // Using a custom module
    const sumAge = math.add(jsonData.age, 5);

    // Using the thread pool for a CPU-bound task
    crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derivedKey) => {
      if (err) throw err;
      console.log("Derived Key:", derivedKey.toString("hex"));
    });

    // Emitting an event after processing data
    eventEmitter.emit("dataProcessed", {
      ...jsonData,
      reversedHobbies,
      sumAge,
    });

    // Formatting code using Prettier
    const formattedCode = prettier.format(
      `const data = { name: '${jsonData.name}', age: ${jsonData.age} }; console.log(data);`,
      { ...require("./prettier.config.js"), parser: "babel" },
    );

    console.log("Formatted Code:", formattedCode);
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

processData();

// Loop example
for (let i = 0; i < 3; i++) {
  console.log(`Loop iteration ${i}`);
}

// Promises example
fs.readFile("data.json", "utf8")
  .then((data) => {
    console.log("File read with Promises:", data);
  })
  .catch((err) => {
    console.error("Error reading file with Promises:", err);
  });

// Async/Await example
async function readFileAsync() {
  try {
    const data = await fs.readFile("data.json", "utf8");
    console.log("File read with Async/Await:", data);
  } catch (err) {
    console.error("Error reading file with Async/Await:", err);
  }
}

readFileAsync();
