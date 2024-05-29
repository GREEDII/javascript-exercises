const removeFromArray = function (arr, ...args) {
  for (let i = 0; i < arr.length; i++) {
    // compare each args element to arr[i]
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        arr.splice(i, 1);
        // reset i because splice messes with indexes
        i = 0;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
