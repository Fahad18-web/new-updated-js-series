/*  var let or const ki kahani */

const newUser = "fahad"
let   userPassword = 123455
var   userEmail = "fa2390@google.com"
 userCity = "punjab"

 let userPhone;
//  newUser= "ahad"

userEmail = "fa90@gmail.com"
userCity = "lahore"
console.table([ typeof newUser, userPassword, userEmail, userCity, userPhone]);

{
    let  userPassword = 23890890
    console.log(userPassword);
 }

 /*  ******************* Summary**************
 
1. avoid var kyun ke uske global or funtional scope ke issue ki waja se 
2.  use let or const 
3.  javascript mai scope {} in curely braces ko kahte hai ab jo variable is braces mai specify hoga wo block  scope ban jaye ga 
4. javascript mai agr ham ne ksi variable ko bagair ksi keyword ke assign ker dia to wo bhi change ho sakta hai 
5. const wo jo ap bilkul change nahi kerna chahte 
6. let change hosakta hai but iska scope local bhi hai or block bhi let ki value re-assign hosakti hai but re-declear nahi hosakta
7. var bhi change ho sakta hai but uska scope global hota hai matlab ager ksi na 10 jaga var ke variable ko store kya to wo sab jaga change hojaye ga is liya ham var ko avoid kerte hai

 */

