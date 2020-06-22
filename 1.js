const Ev = require("events");

const emitter = new Ev();

emitter.on("log", (...arg) => {
  console.log(`--- Logged --- ${arg}`);
});

module.exports = emitter;
