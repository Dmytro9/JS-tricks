// https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat/

// ES6 Solution (one level nested array)
const oneLevelDeep = [[1, 2], [3]];

const flattened = [].concat(...oneLevelDeep);
// [1, 2, 3,]

// Recursion (many level nesting)
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

// Search in nested array
function search(item, arr) {
  return arr.flat(Infinity).find(el => el === item);
}

const haystack = [1, 4, [5, 6, 7, [8, 18, [34, 177, [98, [210, [213]]]]]]];
const needle = 213;

console.log(" sdcsc ", search(needle, haystack));
