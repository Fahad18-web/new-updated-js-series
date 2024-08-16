// control flow in js

const { Alert } = require("bootstrap");

// conditions 

// const balance = 500;

// if (balance === 300) {
//     console.log("you have enough balance ");
// }
// else{
//   console.log("you have to recharge your balance");
// }

// implicit scope 

//  if (2==2) console.log("excuted");

// logical operators 

// const height = true
// const age = true
// const marks = false

// if (height && age && marks) {
// console.log("you can join");
    
// }

// if (age || marks) {
//     console.log("you are still eligible");
// }

// switch statements

const Names = 2

switch (Names) {
    case 1:
        console.log("fahad");
        break;
    case 2:
        console.log("Areeba");
        break;
    case 3:
        console.log("sawera");
        break;
    case 4:
        console.log("zain");
        break;

    default:
        console.log("default case match");
        break;
}

// agr ham swtich statment mai ksi no ki jaga string case use kere ge like case values string mai use hongi

//  truely or falsy values inko hm asume ker lete hain ke ye true hai or fasle hai 

// const userEmail = "Fahad@.ai"
// if (userEmail) {
//     console.log("got a user");
// } else {
//     console.log("user not found");
// }

// fasly values 
// false, 0 , Bigint 0n, -0, null, undifined , Nan


const Name = "fahad"
if (Name === Name) {
    console.log("user is found");
    }
alert("user log in");