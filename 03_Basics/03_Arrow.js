const user = {
    username: "Rishabh",
    price: 999,
    welcomeMesg: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}
// user.welcomeMesg()
// user.username = "Sam"
// user.welcomeMesg()

// console.log(this)

// function chai(){
//     let username = "Rishabh"
//     console.log(this.username)
// }
// chai()

// const chai = function (){
//     let username = "Rishabh"
//     console.log(this.username)
// }


//+++++++ Arrow function ++++++
const chai = ()=>{
    let username = "Rishabh"
    console.log(this.username)
}
// chai()

// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }

// const addTwo = (num1, num2)=> (num1+num2);
// const addTwo = (num1, num2)=> ({username: "Rishabh"})

// console.log(addTwo(3,4))

// const myArray =[2,3,4,5,6,6,9]
// myArray.forEach()