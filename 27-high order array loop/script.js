// high order array loops 

// objects mai loop lagana hai to for in loop 
// arrays pe loop lagana to for of loop


// for of loop 

const arr = [13,3,5,4,8]

for (const myarray of arr) {
    // console.log(myarray)
}


const mystring = "hello world!"

for (const string of mystring) {
    // console.log(string);
}

// maps javascript mai objects ke tor per use hote hai maps order ko yad rakhte hain but obj it self order ko yad nahi rakhte

const map = new Map()
map.set("IN", "India")
map.set("PAK", "Pakistan")
map.set("LR", "Lahore")

for (const [key, values] of map) {
    console.log(`the key is ${key} and value is ${values}`);
    
}

// objects de-structure 
// objects iterable nahi hote 
// objects ko de-structure kerne ke liya hm [ ] use kerte hai

const object ={
    'GAME1': "NFS",
    'GAME2': "CRICKET07",

}
// console.log(object);

// for in loop 

// for in loop is used to iterate objects 

const myObject = {
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    css:"Cascading style sheet",
}

for (const key in myObject) {
//    console.log(`${key} is shortcut of ${myObject[key]}`);
}

// for each loop is not a loop its a call back function or foreach function call kerta hai bas

const languages = ["js", 'cpp', "css", "python"]

languages.forEach( function(val) {
    // console.log(val);
});

// jab bhi database se data ata hai wo obj ki form mai hota hai 
// call back function ka naam nahi hota hai

const coding = [
    {
        languageName: "javascript",
        languagepath: "js"
    },

    {
        languageName: "cpp",
        languagepath: "c++"
    },

    {
        languageName: "python",
        languagepath: "py"
    },
]

coding.forEach( (items , index, arr)=> {
    // console.log(items.languageName);
});

// for each mai arrays ke objects ko hm . se get ker sakte hai 