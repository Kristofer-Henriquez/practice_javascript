# 1. Write a function that takes in an array of numbers and returns its sum.

array = [2, 5, 7, 8]
i = 0
sum = 0
while i < array.length
  sum = sum + array[i]
  i += 1
end

p sum