// singleton

// const tinderUser = new Object();
const tinderUser = {} // non singleton

 tinderUser.id = "123abc";
 tinderUser.name = "Rummy";
 tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName: {
            firstName: "Rishabh",
            lastName: "Gupta"
        }
    }
}

// console.log(regularUser.email)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userfullName)
// console.log(regularUser.fullName?.userfullName.firstName)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "some@gmail.com",
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// destructuring
const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Rishabh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course;
// console.log(courseInstructor)
console.log(instructor)

// const navbar =({company})=>{

// }
// navbar(comapny= "xyz")

// API ->>>
// {
//     name: "Rishabh",
//     courseName: "Js in hindi",
//     price: "free"

// }

// [
//     {},
//     {},
// ]