// array

const myArr = [0,1,2,3,4,5];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr[0]);
// console.log(myArr2[0]);
// console.log(myHeros[0]);

// Array methods->

// myArr.push(6);
// myArr.push(7);
// myArr.pop(); // remove from last

// myArr.unshift(9); // add element front 
// myArr.shift(); // remove from front

// console.log(myArr.includes(9)); // return false
// console.log(myArr.indexOf(9)); // return -1

// const newArr = myArr.join();
// console.log(typeof newArr); // it is string
// console.log(myArr);


// slice , splice->

console.log("A :", myArr);

const myn1 = myArr.slice(1,3); // not include 3
console.log(myn1);
console.log("B :", myArr);

const myn2 = myArr.splice(1,3); // not include 3
console.log("c :", myArr);
console.log(myn2);

