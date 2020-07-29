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

console.log(SelectEvenItems(["a", "b", "c", "d", "e", "f"]));
