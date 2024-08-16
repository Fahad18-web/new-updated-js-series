// ******************** Notes **************


//  ab typescript apko allow hi nahi kerti ke ap different datatype ko compare karein ab 2 bara hai to javascript na string "2" ko convert kerdia number mai to javascript mai apko comparison ke output unpredictable mile ge jese dono ke output true aye hai
// console.log("2" > 1);
// console.log(1 < "02");

// ab javascript mai jab hum equality check == or comparison like >,<,>=,<= use kerte hai to ye different work kerte hai to comparison jab kya null ko to use convert kerdia number mai or ab null number  ki trah behave kere ga to uski waja se 1 false hai or 3 true hai !important null is empty value

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// === ye triple equality check 2 different datatype ko compare nahi kerta 
console.log("2"===2);

// very important summary in typescript jab ham 2 same datatype ko compare  kerte hai wo easyly  run hogata hai lekin jab ham 2 diffrenet datatypes ko compare kerte hai == ya <= to javascript pehle use same datatype banaye gi or phir use run kere gi jese null wali example mai so basically hamain is trah ke conversions ko avoid kerna chaiye
