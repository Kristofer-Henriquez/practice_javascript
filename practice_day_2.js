// # Write a function that accepts an array of strings and returns a new array containing 
// every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output 
// should be ["a", "c", "e"].


function SelectEvenItems(strings) {
  var result = [];
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      result.push(string);
    }
    index ++;
  });
  return result;
}

// console.log(SelectEvenItems(["a", "b", "c", "d", "e", "f"]));


// # Write a method that accepts one argument - an array of numbers. The method should return the 
// greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.


function Max(numbers) {
  var CurrentMax = numbers[0];
  numbers.forEach(function(number) {
    if (number > CurrentMax) {
      CurrentMax === number;
    }
  });
  return CurrentMax;
}

// console.log(Max([5, 4, 8, 1, 2]));


// # Write a method that accepts a number and returns its factorial. For example, the 
// factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


function Factorial(number) {
  var result = 1;
  var CurrentNumber = number;
  for (var i = 0; i < number; i++) {
    result = result * CurrentNumber;
    CurrentNumber = CurrentNumber - 1;
  }
  return result;
}

console.log(Factorial(5));


