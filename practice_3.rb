# 1. Write a function that takes in an array of numbers and returns its sum.

# array = [2, 5, 7, 8]
# i = 0
# sum = 0
# while i < array.length
#   sum = sum + array[i]
#   i += 1
# end

# p sum

# 2. Write a function that takes in an array of strings and returns the smallest string.

# array = ["hello", "ok", "kristofer", "world"]

# smallest_string = array[0]
# i = 0
# while i < array.length
#   if array[i].length < smallest_string.length
#     smallest_string = array[i]
#   end
#   i += 1
# end
# p smallest_string

# 3. Write a function that takes in an array of numbers and returns a new array with the numbers 
# in reverse order.

# def descending(numbers)
#   result = []
#   index = numbers.length - 1
#   numbers.length.times do
#     result << numbers[index]
#     index = index - 1
#   end
#   result
# end

# p descending([9, 2, 1, 3])

# Write a function that takes in an array of words and returns the number of
#  words that begin with the letter "a".

array = ["hello", "apple", "alan", "banana", "arbol"]
count = 0
i = 0
while i < array.length
  if array[i][0] == "a"
    count += 1
  end
  i += 1 
end

p count
