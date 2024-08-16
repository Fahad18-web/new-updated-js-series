// ... is a spread oprator or rest bhi kahte hain

// jab hamain items eik sath chaeye hoti hain to ham rest oprator (...) use kerte hain

// function shoppingCart(...num1){
//     return num1
// }

// console.log(shoppingCart(200,400.500));

// // funtions with objects

// const username = {
//     name: "fahad",
//     age:21
// }

// function entries(anyobject) {
//   console.log(`the name is ${anyobject.name} and the age is ${anyobject.age}`);
    
// }

// entries(username);

// funtions with array

const myArray = [200,100,4004,99]

function handleArray(getArray){
    return getArray[2];
}

// console.log(handleArray(myArray));

let laptops = {
     model: "dell",
     price: 20000
}

function handleLaptop(laps){
    //  console.log(`the model of laptop is  ${laps.model}  and price is ${laps.price}`);
     
}
// handleLaptop(laptops)

// return kya kerta hai ke apne fun defination mai jo bhi execute kerwana hai use return apko return kerdeta hai but uske liya apko us return ko console.log bhi kerna pare ga

// or important note jab ap functions mai objs and arrays banate ho to parameters mai khud se hi koi name add kerdo jese se ke uper wali examples mai kya hua hai


// jab bhi objects aur array ke sath function banate hai to uske parameter mai khud se koi name pass kerdein aur uske function ke execution ke arguments mai us object ya array ka refrence pass kerdein




let userList = ["fahad", "ahad", "hammad", "talha", "saif"]

function handleUserList(username) {

    console.log(username[3]);
    
}

handleUserList(userList)

Object.create()