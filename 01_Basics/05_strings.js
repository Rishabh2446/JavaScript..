const name = "Rishabh"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declaration
const gameName = new String('Rishu-g');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

// const anotherString = gameName.slice(0,4);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);

//trim
const newStringOne = "    hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rishu.com/rishabh%20gupta"
url.replace('%20', '-');
console.log(url);

console.log(url.includes('rishu'))
console.log(gameName.split('-'));