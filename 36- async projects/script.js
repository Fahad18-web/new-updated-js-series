// const stop = document.getElementById("stop")



// setTimeout(function(){
//     // console.log("hello world!");
//     const changeme = document.querySelector("h1").innerText = "hello javascript"
// },2000)

//  clearTimeout(changeme)


// const print = function(){
//     console.log("hello js");
// }

// setTimeout(print, 3000)

// set time out ki example 

// const h1 = document.querySelector("h1")

// const changeh1 = function(){
//   h1.innerText = "you are learning async js"
// }

// const stopH1 =  setTimeout(changeh1, 2000)

const stopBtn = document.querySelector("#stop")

// stopBtn.addEventListener("click", ()=>{
//     clearTimeout(stopH1)
//     console.log("changes has been stoped");
// })

// set interval ki example

// const run = function(){
//     console.log("hello fahad");
// }

// const stopRun   =  setInterval(run, 1000)

const startBtn = document.querySelector("#start")

// stopBtn.addEventListener("click",function(){
//     clearInterval(stopRun)
//     console.log("intervals has been stopped");
// })


// const loop = function(){
//     for (let i = 0; i <= 100 ; i++) {
//        console.log(i);   
//     }
    
// }

//  const stopLoop = setInterval(loop,2000)

//  stopBtn.addEventListener("click",function(){
//     clearInterval(stopLoop)
//     console.log("loop has been stoped");
//  })



const count = function(){
   let i = 0
   while(i<=10){
      console.log(i++);
   }
}

const stopcount =  setTimeout(count,2000)

// clearTimeout(stopcount)


