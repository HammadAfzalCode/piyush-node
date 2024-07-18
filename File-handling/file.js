const fs = require("fs");

fs.writeFileSync("./test.txt", "Hey there"); // synchronous file writing

fs.writeFile("./async.txt", "hello there async", (err) => {});
