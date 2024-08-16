const button = document.querySelectorAll("button")
console.log(button);

const body = document.querySelector("body")

button.forEach(function(btns){
   btns.addEventListener("click",function(e){
  console.log(e.target);

    if (e.target.id === "red") {
        body.style.backgroundColor = "red"
    }

    if (e.target.id === "green") {
        body.style.backgroundColor = "green"
    }

    if (e.target.id === "blue") {
        body.style.backgroundColor = "blue"
    }

    if (e.target.id === "yellow") {
        body.style.backgroundColor = "yellow"
    }
   });
});