//Data Types in JavaScript
//JavaScript has dynamic typing, which means that variables can hold values of any type without explicit declaration. The main data types in JavaScript are:

//1. Primitive Data Types:  
//- Number: Represents both integer and floating-point numbers. Example: 42, 3.14
//- String: Represents a sequence of characters. Example: "Hello, World!"
//- Boolean: Represents a logical entity that can be either true or false. Example: true, false
//- Null: Represents the intentional absence of any object value. Example: null
//- Undefined: Represents a variable that has been declared but not assigned a value. Example: undefined
//- Symbol: Represents a unique and immutable identifier. Example: Symbol('description')
//- BigInt: Represents integers with arbitrary precision. Example: 9007199254740991n

let x = null;
console.log(x);
console.log(typeof x); // "object" (this is a known quirk in JavaScript)

let y = BigInt(9007199254740991);
console.log(y);
console.log(typeof y); // "bigint"

const object = { name: "Alice", age: 30 };
console.log(object);
console.log(object.name); // "Alice"
console.log(object['age']); // 30
console.log(typeof object); // "object"



//2. Non-Primitive Data Types (Objects):
//- Object: Represents a collection of key-value pairs. Example: { name: "Alice", age: 30 }
//- Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
//- Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log("Hello!"); }