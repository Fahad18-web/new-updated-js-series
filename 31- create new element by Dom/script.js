 const parent = document.querySelector(".parent")
//  console.log(parent);

const div = document.createElement("div")

div.className= "title"
div.id = "title-txt"
// div.innerText = "hello Javascript"
div.style.backgroundColor = "green"
div.style.padding = "10px 5px"
div.style.textAlign = "center"
div.style.fontSize = "3vw"
const addtext = document.createTextNode("chai our code")

div.appendChild(addtext)

document.body.appendChild(div)

const paragraph = document.body.appendChild(document.createElement("p"));
// You can append more elements to the paragraph later

paragraph.innerText = " 'Chai aur Code' blends the warmth of tea with the precision of programming, fostering a community where developers share ideas and solve problems over a comforting cup. This fusion of culture and technology creates a unique space for creativity, collaboration, and innovation in the ever-evolving tech landscape."
paragraph.style.backgroundColor = "green"
paragraph.style.padding = "10px 5px"
paragraph.style.fontSize = "2vw"
paragraph.style.textAlign = "center"