
let a = 4
let b= 5

if(true){
    let a = 1;
    const b = 2;
    console.log("inner:", a);
    console.log("inner:", b);
}

console.log("outer:", a);
console.log("outer:", b);

