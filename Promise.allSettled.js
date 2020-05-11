// Promise.all() - fails when one of the promises is failed , on the other hand Promise.allSettled

const promises = [fetch("/api1"), fetch("/api2"), fetch("/api3")];

Promise.allSettled(promises).then(results =>
  results.forEach(result => console.log(result.status))
);

// "fulfilled"
// "fulfilled"
// "rejected"
