// reduce method for sum of charts of shopping store
// agr ap emplicit funtion use ker rahe ho to return use kerne ki zarorat nahi hai but agr apne scope use kya to phr return use kerna pare ga

const ShoppingCart = [
    {
        coursename: "js course",
        price: 1999
    },

    {
        coursename: "python course",
        price: 999
    },

    {
        coursename: "mobile dev course",
        price: 12999
    },

    {
        coursename: "data science course",
        price: 2999
    },
]

const cartPrice = ShoppingCart.reduce((acc, items) => (acc + items.price), 0)

//  console.log(cartPrice);

//  maps for numbers addition

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = mynums.map((num) => {
    return num + 10
})

// console.log(sum);

// chaining ka matlab ke ap multiple map or filter and reduce method muktiple time aik chain bana ker use kersakte ho or ye sabhi call back functions per kam kerte hai

const multiple = [1,2,3,4,5,6,7,8,9,10]

const  show =  multiple.map((num)=> {
    return num * 4
})

// console.log(show);

let myuser = (user1, user2, user3) =>  (user1, user2, user3) 

// console.log("fahad", "Ali", "mujahid");


// filter method

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const mybooks = books.filter((bk) => bk.title === 'Book Three' )

//   console.log(mybooks);
  
 

 let  myArry = [1,2,3,4,5,6,7,8,9,10] 

 let arr = myArry.map((ele) => ele * 20)
                 .map( (ele) => ele / 2 )
                 .filter( (ele) => ele >= 60)
//  console.log(arr);
 
// reduce method  

let newArr = [1,2,3,4]

let arrtotal = newArr.reduce( function (acc, currval) {
    console.log(`the acc is ${acc} and currval is ${currval}`);  
    return acc + currval
  
}, 0 )

console.log(arrtotal);
