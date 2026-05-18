// Dates 
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2026");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDadte = new Date()
console.log(newDadte.toString());
console.log(newDadte.getDate())
console.log(newDadte.getDay())
console.log(newDadte.getMonth())

newDadte.toLocaleString('default', {
    weekday: "long",
})