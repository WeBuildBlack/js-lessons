// Scope is the accessibility of your variables, functions,
// and objects in areas of your code. I know that sounds
// scary but bear with me. If I don't define variable but
// try to use it I will get a reference error
// console.log(someMadeUpVariable)

// The reason for this is because I have not defined it
// and put it any scope. The two scopes are global scope
// and local scope. Global scope variables are available
// everywhere while local scope variables are only
// available in their functions For example this height
// var is in global scope so the sayHeight function can
// use it.

// var height = 50

// function sayHeight() {
//     return height
// }
// console.log( sayHeight() )

// If we create a height variable in a function's
// local scope it can't be called from the global
// scope or another function's local scope

// function sayH() {
//     var h = 100
//     return h
// }

// function sayH2() {
//     return h
// }

// console.log( h )
// console.log( sayH() )
// console.log( sayH2() )