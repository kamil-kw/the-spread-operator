/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Secondary array", arr2);
console.log("First array", arr1);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
 
arr4.push(7);
console.log("Third array", arr3);
console.log("Fourth array", arr4);


// Copying an object

let obj1 = { a:1, b:2, c: 3 };
let obj2 = { ...obj1, d: 4 };
// Additionally, if you want to change one of the  values in the original object, you can do that  
// by simply overwriting it in the new object. In  this object 3, I’m first spreading object 1, and  
// then overwriting b from 2 to 5
let obj3 = { ...obj1, b: 5 };
console.log("First Object", obj1);
console.log("Second Object", obj2);
console.log("Third Object", obj3);

// Copying only part of an array/object

// It's worth noting that the spread operator doesn't  need to make up the entirety of the object or  
// array you create with it. In other words, if I  wanted to combine several of the objects we've  
// worked with so far into a new object,  I can define something like array 5,  
// and inside it I can spread the first array, the  first object by spreading it within curly braces,  
// the third array, and three  arbitrary values like x, y, and z.
let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z"];
console.log(arr5);