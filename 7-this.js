// The "this" keyword is a variable that points to the
// current object that we're in when a function is called.
// In JavaScript everything is an object. The "this" 
// keyword starts off as an empty object because there
// is no current function being called.
console.log(this)

// Now let's try making an object
var person = {
    name: 'Devin',
    greet: function(){
        return this.name
    }
}
console.log(person.greet())

// Notice how we attach a function that prints
// out "this.name". In other words print out
// this object's name property. So when the
// function is fired "this" refers to the
// person object. Let's try making the greet
// function seperate and put it on 2 objects.

function sayName(){
    return this.name
}

person.greet = sayName

var person2 = {
    name: 'Jack',
    greet: sayName
}

console.log(person.greet())
console.log(person2.greet())

// Let's say we didnt attach the sayName 
// function to the person objects but still 
// wanted them to have the ability to use the
// sayName function. We could use either the 
// call or apply method. These allow you to
// explicitly tell the function what "this"
// will refer to when it fires off. For example:

person = {
    name: "Joe"
}

sayName.call(person)
sayName.apply(person)

// Call and apply fires off the method with
// the new "this" context applied but if you
// wanted to save that method you would use bind

var sayJoe = sayName.bind(person)
console.log(sayJoe() + " is cool")
console.log(sayJoe() + " is lame")

// Also keep in mind that you cant use bind on
// a function that you created from bind

var sayJack = sayJoe.bind(person2)
console.log(sayJack() + " is cool")
console.log(sayJack() + " is lame")