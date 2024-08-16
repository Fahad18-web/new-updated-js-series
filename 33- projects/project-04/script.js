const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const display = document.getElementById("display")
const birthday = document.getElementsByClassName("birthday")

const birthdate = "20/06/2024"

setInterval(function(){
    const date = new Date()
    display.innerHTML = date.toLocaleDateString()
    if(date === birthdate){
        alert("happy birthday to you fahad")
    }
})

setInterval();