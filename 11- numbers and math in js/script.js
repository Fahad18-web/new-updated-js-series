// numbers and maths in js
 
const Num = 400;
// console.log(Num);

const newObj = new Number(100);
// console.log(newObj.toString().length);

const DecNUM = 123;
// console.log(DecNUM.toFixed(2));

const anotherVal = 1234.8908
// console.log(anotherVal.toPrecision(3));

// +++++++++++++++++++ Maths ++++++++++++++++++

// console.log(Math);

/* abs negative values ko positive mai convert kerdeta hai*/

// console.log(Math.abs(-10));

// round method ye method values ko round about kerke return kerta hai
// console.log(Math.round(15.2));

// ceil method ye method hamein bari values return kerta hai
// console.log(Math.ceil(15.2));

// floor method is mai hamaien small values return hongi
// console.log(Math.floor(10.5));

// min method
// console.log(Math.min(10,9,3,80));

// max method 
// console.log(Math.max(1,2,67,90));

// random method hamein 0-1 ke darmayan values return kerta hai in the form of decimel or jab ham 10 se * karein ge to phir hamein values 1.90809 or 6.90909 kuch is trah se return hoti hai
// console.log(Math.random()*10);

console.log(Math.floor(Math.random()*10) + 1);
