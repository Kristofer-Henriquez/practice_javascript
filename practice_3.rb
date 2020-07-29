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

array = ["hello", "ok", "kristofer", "world"]

smallest_string = array[0]
i = 0
while i < array.length
  if array[i].length < smallest_string.length
    smallest_string = array[i]
  end
  i += 1
end
p smallest_string