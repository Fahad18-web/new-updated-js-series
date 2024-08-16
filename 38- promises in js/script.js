// const myPromise = new Promise(function(resolve,reject){
//     setTimeout( function(){
//         let error = false
//         if(!error){
//             resolve({username:"fahad", password: "123", email:"fahad@gmail.com"})
//         }
//         else{
//             reject("Error: something went wrong")
//         }

//     },1000)
// })

// myPromise.then(function(user){
//     console.log(user);
//     return user.username
// })
// .then(function(username){
// console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })

// async await

// const PromiseEnd = new Promise(function(resolve,reject){
//     setTimeout( function(){
//         let error = true
//         if(!error){
//             resolve({username:"ayesha", email:"fahad@gmail.com"})
//         }
//         else{
//             reject("Error: something went wrong")
//         }

//     },1000)
// })

// PromiseEnd();

// async function alluserdata(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("error: there is error");
//     }
// }

// alluserdata()



// const newPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//      let error = false
//      if(!error){
//         resolve({name:"fahad", password: "123"})
//      }
//      else{
//         reject("Error: something went wrong")
//      }        
//     },1000)
// })

// async function myData(){
//     try {
//         const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//        const data =  await response.json
//        console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// myData()

// fetch("https://api.github.com/users/hiteshchoudhary")
// .then((response) =>{
//   return response.json
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// ye bhi aik method hai promise banane ka throw async await or try catch ke sath 

// const lastOne = new Promise(function(resolve, reject){
//   setTimeout(function(){
//    let error = false
//    if(!error){
//     resolve({username: "fahad", Gmail:"fa@gmail.com"})
//    }
//    else{
//     reject("Error: invalid")
//    }
//   },1000)
// })

// async function runLastone(){
//   try {
//     const response = await lastOne
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// runLastone()


// promise throw fectch and async await

async function request(){
  try {
    const response =  await fetch("https://api.github.com/users/hiteshchoudhary")
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

request()

//  API request throw fetch

// fetch("https://api.github.com/users/hiteshchoudhary")
// .then((response)=>{
//  return response.json()
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//   console.log(error);
// })

// promises ko new keyword ke sath banaya jata hai or is me ham .then ke sath or catch ke sath khelte hai phir ham promises ko async await ke sath try catch method se bhi bana sakte hai phir fetch ko use kersakte hain 