const display = document.getElementById("display")


setInterval(function(){
    const date = new Date()
    display.innerHTML = date.toLocaleTimeString()  
}, 1000);


