//  ############# premetive datatype ############### 

/*string,number,boolean,null,undefined,symbol,bigint  
premetive datatype values ki copy return kerte hai

*/
const myName = 'fahad' 

const myNumber = 123
const newNum = 293.2

const theUser = false

let userPassword ;
 
const outSidetemp= null
console.log( typeof outSidetemp);
const iD = Symbol('123')
const anotherId = Symbol('321')

// console.table([ typeof myName, typeof myNumber, typeof newNum, typeof theUser, typeof userPassword]);

// console.log(iD === anotherId);

// const bigNum = 2138913900104342n
// console.log( typeof bigNum);
// #####################################################



/* (reference) non-premetive datatype
arrays,object,function*/

let myArray = ["fahad", "ali", "haider"]
let myIntro =
{
    name: "fahad",
    age: 22,
}

let meraName = myIntro.name;
// console.log(meraName);

// function ko ksi memory space yani ke 1 varibale mai bhi store kerwasakte hai
 let myFunc = function(){}
//  console.log("hello world");

//  console.log(typeof myFunc);