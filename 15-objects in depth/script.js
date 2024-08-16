// js objects in depth

// types of objects 
// 1) object literals
// 2) object constructor
// 3) object singleton

const mysym = Symbol("ayesha")

const myInfo = {
    name : "fahad",
    [mysym] : "ayesha",
    age : 21,
    mylocation: "lahore",
    loggedIn: false,
    loginHistory: ["monday" , "friday"]
}

console.log( myInfo);

// object constructor ko ham is create method se bana sakte hain
// Object.create