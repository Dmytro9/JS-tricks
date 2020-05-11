//  Perfomance.now  // https://blog.logrocket.com/how-to-practically-use-performance-api-to-measure-performance

const t0 = performance.now();
for (let i = 0; i < 100000; i++) {
  // some code
}
const t1 = performance.now();
console.log(t1 - t0, "milliseconds");

// Console.time
console.time("test");
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd("test");
