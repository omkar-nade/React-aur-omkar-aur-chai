// objects literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Omkar",
    age:20,
    [mySym]: "mySym",
    location: "india",
    email: "india@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])
// console.log(typeof mySym)

// JsUser.email = "myindia@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "dearindia@gmail.com"
// console.log(JsUser)

/*
JsUser.greeting = function(){
    console.log("Hellow Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hellow Js User:${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
*/


// singleton object
// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Patil"
tinderUser.isLoggedIn = false
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// const regularUser = {
//     email: "vit@gmail.com",
//     fullName: {
//         username:{
//              firstname: "sham",
//              lasrname: "shet"
//         }
//     }
// }
// console.log(regularUser.fullName.username.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1 , obj2}
// const obj3 = Object.assign({}, obj1,obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)
