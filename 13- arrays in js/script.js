// arrays in js 

//  array mai sqaure brackets hoti hai aur uske ander ki values ko element kehte hai
// const myArr = [1,2,3,4,5,6,7,9]
// console.log(myArr.splice(2,5, 'fahad'));
// console.log(myArr.length);

const newArray = ["apple ", " mango ", " orange" , "bannana"]
// console.log(newArray.splice(1,2 , "peace"));
// console.log(newArray.length);

// sift() and unshift() ye dono bhi push or pop ki trah hi kam kerte hain 
newArray.unshift("fahad")
newArray.shift()
// console.log(newArray);

// array se questions bhi poch sakte hai like is methods ke zareye

// newArray.includes("orange")
// newArray.indexOf("bannana")

// console.log(newArray.indexOf());

// join() se apko string array milti hai

// newArray.join()
console.log(newArray.join());


// slice() and splice() 
// slice use ketra hai indexes ko 
// console.log(newArray.slice(0, 2));

// splice remove kerta hai given ranges or element 
console.log(newArray.splice(1,3));

