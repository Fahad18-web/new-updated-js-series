// alert('are you web developer');
var
a=6;
document.write(a++);
// post increment mean  ke pehli bar mera output run ho to us mai 1 add kro matlab ke a=3 hai to output 3 ho  ga 
// pre increament means ke jo value assign ki hai us ko add ker ke output show kro like a=3 ++3 1+3=4 lakin jab ham sam variable ya datatype per operations perform kere to 3++ 3 and then ++3 =1+1+3=5

document.write(++a);

// post increament
var b=5;
console.log(b++);


// pre increment
console.log(++b);

document.write(b++);

let x = 5;
let y=++x
document.write('<br>')
document.write(++x);



var age=25;
var studentname='fahad';
if(age<=24)
{
    // here we use concadination statement
    console.log( studentname+" is not eligible for this job")
}
else if(age>=26)
{
    console.log(studentname + " is eligible for this job")
}
else
{
    console.log(studentname + " you are not recommended yet")
}


var a=100;
b=50;
var studentname="fahad";
if(a<98 && b>=49)
console.log(studentname + " is true")

else if(a>98 && b<49)
{
    document.write(studentname + " is false")
}
