const fs = require("fs");

// Data which will write in a file.
let data = "Learning how to write in a file.";

// Write data in 'Output.txt' .
fs.writeFile("Output.json", JSON.stringify(data), (err) => {
  if (err) throw err;
});
