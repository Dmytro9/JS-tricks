// Unique values of array
const emitter = require("./1");
const arr = [1, 1, 2, 2, 3, 3, 5, "one", "two", "one"];

const uniqArr = [...new Set(arr)];

console.log(uniqArr);

let racer = function() {
  setTimeout(() => console.log("timeout"), 0);
  setImmediate(() => console.log("immediate"));
  process.nextTick(() => console.log("nextTick"));
  console.log("current event loop");
};

racer();

emitter.emit("log", 1, 2, 3);
