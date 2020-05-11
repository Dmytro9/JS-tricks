// Unique values of array
const arr = [1, 1, 2, 2, 3, 3, 5, "one", "two", "one"];

const uniqArr = [...new Set(arr)];

console.log(uniqArr);
