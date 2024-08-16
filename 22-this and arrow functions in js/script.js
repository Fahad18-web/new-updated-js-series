// this function ka matlab hota hai ke to current context ke ander variables hai unko access kerne ke liye or jab ham current context se bahir koi dosra user add kerdein to wo update hojaye ga 

let myBats = {
    batOne: "j-DC",
    price: 10000,

    function: function(){
        // console.log(`${this.batOne} is first bat in list`);
        // console.log(this);
        
    }
}

// myBats.function()
// myBats.price = 5500
// myBats.function()

// console.log(this);


function fahad(){
    let usr = "ali"
    // console.log(this.usr);
   
}
// fahad()

let code = function(){
    // console.log(this);
    
}

// code()

// arrow function 

let fine = ()=> {
    // let c= "cat"
    // console.log(this.c);
    
}
// fine()

let display = (usr) => {
//    return usr
}
// console.log(display("fahad"));

// emplicit fun

// let add = (num) => (num)
// console.log(add(3 + 1));


//1 context ka matlab hai simple values ke konsa variable us context mai hai
//2 jab ham ki obj mai function bante hai to wo key value pair ke sath bannte hai isi trah variables ke sath hai function ager variable mai store ho to uska name dene ki zarorat nahi hoti

//3 this context ke bahir ya to undefined aye ga ya phr empty object {}

// 4 in classic function this apko data provide kerta hai but ap functions mai object ki trah varibles ko this ke sath get nahi ker sakte lekin jab this ko log kere ge to wo data show kere ga

// 5 function defination mai return use hota hai aur jab empilicit function use hoga to waha return use nahi hota

// obj {} mai kabi bhi access nahi hota use bhi small () laga ker access kerna pare ga


// video 23 immediatelly invoked function

// ye function ham global scope ki polution se bachne ke liya bnate hain aur jab 2 immediat function bane ho to pahle wale ke sath ; use hoga

// ( function chai(usr){
    // console.log(`function has been made for ${usr}`);
    
// })("fahad");

(() => {
    // console.log("another function has been made");
    
})()

let cars = {
    car1: "nisan",
    model: 2023,
    price: 50000,
    color: "black-cobra"
}

let carsData = cars

console.log(carsData.model);

