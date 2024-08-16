const body = document.querySelector("body")

body.style.backgroundColor = "#212121"
body.style.color = "#fff"

// replacewith() method se bhi ham html document mai change kersakte hai


// const h1 = document.body.appendChild(document.createElement("h1") )

// h1.innerText = "hello world!"
// h1.style.backgroundColor = "green"

//  const edith1 = h1.textContent= 'hello world has replace with hello fahad!'

// h1.replaceWith(edith1)

// outerhtml se bhi ham document edit ker sakte hai


const paragraph = document.body.appendChild(document.createElement("p"))

paragraph.innerText = "hello this is unedit paragraph"

const newPara = "now the paragraph has changed or edited"

paragraph.replaceWith(newPara)
paragraph.remove()