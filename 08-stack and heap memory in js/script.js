/*########### stack and heap ########### */

// premitive datatype ki value stack mai store hoti hai like original variable ki copy ban jati hai is mai jab bhi premitive datatype variable ye value stack memory mai store hoga to uski 1 copy banti hai or original variable mai change nahi ata balke copy mai change ata hai

// let myGmail = "fahad@gmail.com"
// let storeGmail = myGmail
//    storeGmail = "fa209&yahoo.com"

// console.log(myGmail);   
// console.log(storeGmail);

// heap memory (non-premitive) datatype heap memory mai store hote hai or is me hamein variable ka refrence milta hai 

let myObjone = {
    email: "fa27u9@google.com",
    age : 25,
}

let myObjTwo = myObjone;

myObjTwo.email = "fahad19@gmail.com";
console.log(myObjTwo.email , myObjone.email);