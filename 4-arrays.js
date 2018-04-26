// Array is a list of values. We create
// arrays by using the square brackets
// and separate out the values by commas
const names = ["Devin", "Alex", "Kris", "Jerome", "Chloe"]
const ages = [25, 28, 35, 32, 29]
console.log(typeof names, names)
console.log(typeof ages, ages)

// To access a value in an array you must
// get it by index. All arrays start their
// indexes at 0. So the first value is index 0
// and the second is 1 and so on.
console.log(names[0])
console.log(names[1])
console.log(names[3])
console.log(ages[0])
console.log(ages[1])
console.log(ages[3])

// Every array has a length property and will
// let you know how many elements are in inside of it
console.log(names.length)
console.log(ages.length)

//A common way of getting the last element 
// in an array is by using the length - 1.
console.log(names[names.length - 1])
// Of course this only works if there is at 
// least one element inside.
const empty = []
console.log(empty[empty.length -1])

// You can also access a subset of the array
// by using the slice method. The first 
// argument is index to start. The second
// is the index to stop. This method call
// below will return index 0 - 2
console.log(names.slice(0,3))
console.log(ages.slice(0,3))

// To add to the end of an array you use
// the push method
names.push("Wesley")
ages.push(25)
console.log(names)
console.log(ages)

// To add to the beginning you use prepend
names.unshift("Vanessa")
ages.unshift(36)
console.log(names)
console.log(ages)

// To add anywhere in an array use the splice method.
// The first parameter is the index to insert at,
// second is the number of elements to delete,
// the last is the data to insert
names.splice(2, 0, "Joe")
ages.splice(2, 0, 43)
console.log(names)
console.log(ages)

// Splice call also be used to remove things at
// any index. Let's get rid of Joe. Bye Joe
names.splice(2, 1)
ages.splice(2, 1)
console.log(names)
console.log(ages)