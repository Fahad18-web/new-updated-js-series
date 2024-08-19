// node list and html collection

 const h1 = document.getElementById("head1")

 h1.innerText = "hello DOM js"
 h1.style.backgroundColor = "orange"
 h1.style.color = "white"
h1.style.padding = "10px 5px"

const unorder = document.querySelector("ul")
 const unList =  document.querySelectorAll("li") 

unorder.style.backgroundColor = "green"

 unList.forEach( (items) => {
    items[0].innerText = "fahad"
 })

//  node list is like array but not full arary it uses index[] or html collection array ke tor per kam nahi kerti ye dono different hai queryselector single element ko grab kerta hai or queryselectorAll multiple element ko grab kerta hai jab bhi ham ksi document element ko classname se grap kerte hai to wo html collection return kerta hai or queryselectorALL Apko nodelist return kerta hai agr apke pas same multiple elements hai to queryselectorALL mai uske liya index bhi sath batana perta hai 

// queryselectorAll mai hamare pas nodelist ati hai aur isme hum index[] use kerte hai aur iske sath foreach() bhi milta hai htmlcollections ko hamre array mai convert kerna perta hai 

const paragraph = document.body.appendChild(document.createElement("p"));
// You can append more elements to the paragraph later

paragraph.innerText = " 'Chai aur Code' blends the warmth of tea with the precision of programming, fostering a community where developers share ideas and solve problems over a comforting cup. This fusion of culture and technology creates a unique space for creativity, collaboration, and innovation in the ever-evolving tech landscape."
paragraph.style.backgroundColor = "green"
paragraph.style.padding = "10px 5px"
paragraph.style.fontSize = "2vw"
paragraph.style.textAlign = "center"

