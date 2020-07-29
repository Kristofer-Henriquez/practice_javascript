// # 1. Write a function that takes in an array of numbers and returns its sum.

var array = [2, 5, 7, 8];
var i = 0;
var sum = 0;
while (i < array.length) {
  sum = sum + array[i];
  i++;
}

console.log(sum);