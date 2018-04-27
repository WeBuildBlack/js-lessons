// Variables are containers that can hold values

// var is a keyword that creates a
// variable
// var cost = 5
// var money = 100
// console.log(money)
// console.log(money - cost)
// variables can also be updated in a variety of ways
// cost = 20
// console.log(money - cost)
// money = money - cost
// console.log(money)
// The -= operator below does the same thing
// as line 11
// money -= cost
// console.log(money)

// Functions are little pieces of logic that
// you can recycle and use when needed. Usually
// you give them data, they do something with 
// the data, then return you back some data
// For example this function below takes a 
// number and adds one to it then returns you
// that number. Y
// function addOne(number) {
//     return number + 1
// }
// The name itself does not matter and you can call
// it whatever you want. Same for the name of the
// data coming in. I called the function "addOne"
// and the variable for the data coming in "number".
// Also you only use the return keyword on the data
// you are returning. Once the return is executed
// the function will stop and return that data.
// Now let's test this:
// var added = addOne(5)
// console.log("5 + 1 = " + added)

// Parameters are the variables you declare for 
// the data coming into the function

// Arguments is the data that you place into
// the function's parameters

// function definition: parameters are funds & price
// function buySomething(funds, price) {
//     return funds - price
// }

// function usage: arguments are money & cost
// money = buySomething(money, cost)

// function definition: parameter is f
// function toCelsius(f) {
//     return (5/9) * (f-32)
// }

// function definition: argument is 50
// var celsius = toCelsius(50)
// console.log(celsius)