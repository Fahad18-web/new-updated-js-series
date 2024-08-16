// class user {
//     constructor(username, gmail) {
//         this.username = username
//         this.gmail = gmail
//     }

//     get() {
//         return this._username
//     }

//     set(value) {
//         this._username = value
//     }

//     get() {
//         return this._gmail
//     }
//     set(value) {
//         this._gmail = value
//     }
// }

// const getUser = new user("m-fahad", "fa@gmail.com")
// console.log(getUser.username.toUpperCase())
// console.log(getUser.gmail.toUpperCase());

// types of object 
// obj literals, obj constructors, obj by property, obj factory 


// class Place {
//     constructor(area, location) {
//         this.area = area
//         this.location = location
//     }

//     get() {
//         return this._area
//     }

//     set(value) {
//         this._area = value
//     }

//     get() {
//         return this._location
//     }

//     set(value) {
//         this._location = value
//     }
// }

// const city = new Place("mughalpura", "shalimar Bagh")
// console.log(city.area);
// console.log(city.location);


// class constructor mai class banate hain constructor mai parameter pass kerte hai or this. laga ker parameters ko store kerwate hai functions bante hai bas phr class constructor mai get or set ko bhi use kerte hai or get mai return kerwate hai parameter ko jis ko store kya hota hai or phr set mai value parameter pass kerke use value assign kerdete hai


// const weeks = ["monday", "tuesday", "wednesday", "thursday"]

// switch (weeks) {
//     case 1:
//         console.log(weeks[0]);
//         break;
//     case 2:
//         console.log(weeks[1]);
//         break;
//     case 3:
//         console.log(weeks[2]);
//         break;
//     case 4:
//         console.log(weeks[3]);
//         break;
//     default:
//         console.log("the defualt case has match");
//         break;
// }


const names = 2

switch (names) {
    case 1:
        console.log("fahad");
        break;
    case 2: 
        console.log("umair");
        break;
    case 3: 
        console.log("asad");
        break;    
    default:
     console.log("default case match");
        break;
}

// switch statment sirf values match kerwane ke liya hota hai
