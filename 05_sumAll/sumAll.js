const sumAll = function (num1, num2) {
  let sum = 0;
  if (
    typeof num1 != "number" ||
    typeof num2 != "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  if (num1 < num2) {
    for (; num1 <= num2; num1++) {
      sum += num1;
    }
    return sum;
  }
  if (num1 > num2) {
    for (; num1 >= num2; num1--) {
      sum += num1;
    }
    return sum;
  }
  // return error with NANS
  // return error with negative numbers
};

// Do not edit below this line
module.exports = sumAll;
