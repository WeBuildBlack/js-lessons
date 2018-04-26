// The 'this' keyword is a variable that points to the
// current context that we're in. In regular people
// speak that means it tells us what object we're in.
// In JavaScript everything is an object. This starts off
// as an empty object because there is no current object.
console.log(this)

// Now let's try making an object
var person = {
    name: 'Devin',
    greet: function(){
        console.log(this.name)
    }
}
person.greet()

// Notice how we attach a function that prints
// out "this.name". In other words print out
// this object's name property. So when the
// function is fired "this" refers to the
// person object. Let's try making the greet
// function seperate and put it on 2 objects.

function sayName(){
    console.log(this.name)
}

person.greet = sayName

var person2 = {
    name: 'Jack',
    greet: sayName
}

person.greet()
person2.greet()