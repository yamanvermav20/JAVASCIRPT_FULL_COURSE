//primitive data types -> those who copy by value
//string, number, boolean, null, undefined, symbol, bigint

let num = 42;
let num2 = num; // num2 is a copy of num
console.log(num); // 42
console.log(num2); // 42

let str = "Hello, World!";
let bool = true;
let nul = null;
let undef = undefined;
let sym = Symbol('description');
let bigInt = 9007199254740991n;


//Difference between null and undefined
//- null is an assignment value that represents the intentional absence of any object value. It is explicitly set by the programmer to indicate that a variable should have no value.
//- undefined, on the other hand, is a type that represents a variable that has been declared but has not been assigned a value. It is the default value for uninitialized variables.

//Symbol
//- A Symbol is a unique and immutable primitive value that can be used as a key for object properties. It is often used to create private properties or to avoid name collisions in objects. Each time you create a Symbol, it is guaranteed to be unique, even if it has the same description as another Symbol.
let u1 = Symbol('user');
let u2 = Symbol('user');
console.log(u1 === u2); // false, because each Symbol is unique

//BigInt- BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number type. BigInt can be created by appending 'n' to the end of an integer literal or by calling the BigInt() constructor.
let a = Number.MAX_SAFE_INTEGER;
console.log(a); // 9007199254740991
a + 1; // 9007199254740992
a + 2; // 9007199254740992, which is incorrect due to precision limitations of the Number type

let bigIntA = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntA); // 9007199254740991n
bigIntA + 1n; // 9007199254740992n, which is correct
bigIntA + 2n; // 9007199254740993n, which is correct