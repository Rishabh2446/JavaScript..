"use strict"; // treat all js code as newer version

// alert(3+3) // we use node js not browser ,it works on browser

console.log(3+3) 
// code readability should be high
console.log("rishu")

let name = "Rishu" // string
let age = 17 // number
let isLoggedIn = false // boolean

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value not assigned yet
// symbol => 

// object

console.log((typeof ""))
console.log((typeof age))
console.log((typeof null)) // obj
console.log((typeof undefined)) // undefined

// datatypes summary ->

// primitive(7)->
/*
1. String 
2. Number
3. Boolean
4. null
5. undefined
6. symbol
7.BigInt
*/

const score = 100;
const scoreValue = 100.3
// const isLoggedIn = false;
const outtemp = null;
let userEmail =  undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 23455656868349092390n

//Reference Type (Non-Primitive)
/*
1. Array
2. Objects
3. Functions
*/

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "rishu",
    age: 24,
}

const myFunc = function(){
    console.log("Hello");
}

console.log(typeof bigNumber);