// console.log("R");
// console.log("I");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("B");
// console.log("H");

function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}

// sayMyName();/

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(); // print NAN
// addTwoNumbers(2,3); // print 5
// addTwoNumbers(2,"3"); // print 23

// const res = addTwoNumbers(3,5)
// console.log("Result: ", res); // print undefined

function addTwoNumbers(num1, num2){
    // let res = num1 + num2;
    // return res;
    // console.log("Rishabh") //never execute

    return num1 + num2;
}

const res = addTwoNumbers(3, 5);
// console.log(res);

function loginUserMessage(username = "sam"){ // default value sam"
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Rishabh"));
// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(400,5000,6000));

const user = {
    username: "Rishu",
    prices: 199
}

function handleObj(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
    
}
// handleObj(user);

// handleObj({
//     username: "Sam",
//     price: 399
// })

const newArr = [200,400,300,500];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArr));
