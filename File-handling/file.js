const fs = require("fs");

// fs.writeFileSync("./test.txt", "Hey there"); // synchronous file writing

// fs.writeFile("./async.txt", "hello there async", (err) => {});

// const result = fs.readFileSync("./async.txt", "utf-8"); // here utf is encoding language
// console.log(result);

// fs.readFile("./test.txt", "utf-8", (err, result) => {
//   try {
//     console.log(result);
//   } catch (err) {
//     console.log("Error", err);
//   }
// });

fs.appendFileSync("./test.txt", "hey hammad\n");
