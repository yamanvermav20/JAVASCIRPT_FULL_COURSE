//functions in Javascript
//Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("World"));

//Expression
const greet1 = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet1("World"));

//Arrow Function
const greet2 = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet2("World"));

//!!!***!!!
//Arrow functions have a shorter syntax and do not have their own 'this' context, which can lead to some differences in behavior compared to regular functions. For example, in an arrow function, 'this' refers to the surrounding lexical context, while in a regular function, 'this' refers to the object that called the function. This can lead to unexpected results when using 'this' inside an arrow function. For example:
const person = {
    name: "Alice",
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};