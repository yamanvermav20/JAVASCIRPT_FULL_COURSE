//reference data types -> those who copy by reference
//object, array, function
//{} [] ()

let a = [1, 2, 3];
let b = a;

b.push(4);

console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]