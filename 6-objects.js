// Think of an object as a thing in real life.
// For example a car is an object in real life.
// A car has properties like it's color,
// it's miles per hour, and weight. It also has
// ways and METHODS of doing things like starting
// it's engine or going in reverse. To create an
// object in our JavaScript world we use the
// curly braces: {}.
var car = {}
console.log(car)
console.log(typeof car)

// You can also create a object with some starting
// properties. If we wanted to give the car a property 
// called "type" with a value of "electric" we'd do like below
car = {type:"electric"}
console.log(car)
// What's going here is a key-value store. Exactly like
// a dictionary. You look up a key which is the word
// and it gives you the value which is the definition

// We can access the values of an object by using
// dot notation like below
console.log(car.type)

// You can also access values through the
// square brackets
console.log(car['type'])

// To add a property to an object you use the same
// dot notation with the assignment operator
car.color = "white"
console.log(car.color)

// Functions attached to objects are called methods.
// A good way to remember it is that a function is
// something that does something and a method is
// and object's way of doing something. See below:
function sayHi(){
    console.log("Wassup bro")
}
var person = {
    greet:sayHi
}
// You know that something is a method or function
// when you see the parentheses at the end. Properties
// are data literals (ex: integer, float, string, boolean)
// and dont have the parentheses at the end
person.greet()