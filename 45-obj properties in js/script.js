const obj = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(obj);

const cars = {
    car1: "bmw",
    NoPlate: "0-02"
}

// console.log(Object.getOwnPropertyDescriptor(cars, "car1"));

const defObj = Object.defineProperty(cars,"NoPlate",{
    writable: false,
    enumerable: false,
    configurable: false,
})

// console.log(Object.getOwnPropertyDescriptor(cars, "NoPlate"));



//  obj property mai ham obj parameter mai obj reference pass kerte hain or jis ki discription chaiye hoti hai use pass kerte hai like jese ke niche likhi gae exapmple

const books = {
    bookname: "try try again",
    aurthor: "mitchal jobs"
}

const collect = Object.getOwnPropertyDescriptor(books, "bookname")

// console.log(collect);

 const define =  Object.defineProperty(cars, "bookname",{
    writable: false,
    enumerable: false,
    configurable:false
 })

 console.log(Object.getOwnPropertyDescriptor(cars, "bookname"));