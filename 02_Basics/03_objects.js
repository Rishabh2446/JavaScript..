// objects (declarion in two ways -> 1.literals, 2.constructor)
// singleton
// objrct.create

//object Literals-

const mySym = Symbol("key1");
const jsUser ={
    name: "Rishabh",
    "full name": "Rishabh Gupta",
    [mySym]: "myKey1",
    age: 20,
    location: "Noida",
    email: "Rishabh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Rishu@23gmail.com";
// Object.freeze(jsUser);
jsUser.email = "Mamta@gmail.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());