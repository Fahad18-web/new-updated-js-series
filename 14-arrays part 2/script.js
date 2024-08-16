const myHeroes = ["superman" , "spiderman", "batman"]

const myBatsman = ["baber azam", "virat kholi" , "fakhar zaman"]

// const merge  =  myHeroes.concat(myBatsman)

// console.log(merge);

// important notes 

/* ager ham javascript mai eik array mai ksi dosri array ko push kerte hai us mai eik new element add hojata hai or jab ham usi push wali array ko concat kerte hai to wo contact to hojaye gi mager hamein first arry return kere gi but hamein us push wali array ko eik new var mai store kerwana hoga phir hamari array concat hogi*/

const complexArray = [1,2,3,4 [5,6,7] ,1,2 [4,5[49,32]]]

const realArray = complexArray.flat(Infinity)

// console.log(realArray);

// jab hamari array mai multiple array hon to use eik array mai convert kerne ke liya flat method use hoga jis se hamari array complex se simple array ban jaye gi balke sahi alfaz mai array sepread hojaye gi flat method se

// console.log(Array.from("fahad"));

// ksi bhi type ke data ko convert kerna ho array mai to us ke liya ham from method use kerte hai

let player1 = 23
let player2 = "fahad"
let player3 = true

console.log(Array.of(player1,player2,player3));

// jab hamre pas is trah ka data ho like jis mai numbers use ho to aese data ko array mai convert kerne ke liye use hota hai of method


