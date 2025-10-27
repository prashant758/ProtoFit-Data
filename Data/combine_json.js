const fs = require("fs");

// Read each JSON file and parse it
const upper = JSON.parse(fs.readFileSync("./upper_body.json"));
const lower = JSON.parse(fs.readFileSync("./lower_body.json"));
const core = JSON.parse(fs.readFileSync("./core.json"));
const full = JSON.parse(fs.readFileSync("./full_body.json"));

// Combine all exercises into one array
const allExercises = [
  ...upper,
  ...lower,
  ...core,
  ...full
];

// Write the combined data into a new JSON file
fs.writeFileSync("./full_data.json", JSON.stringify(allExercises, null, 2));

console.log("✅ Combined all JSON files into full_data.json");
