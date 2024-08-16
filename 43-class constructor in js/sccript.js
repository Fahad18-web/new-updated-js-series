// class cars {
//     constructor(carname, no, id){
//         this.carname = carname
//         this.no = no
//         this.id = id
//     }
//     showCars(){
//         console.log(`the car is ${this.carname}`);
//     }
// }

// const carsDetails = new cars("honda", 123445, "honda-880")
// console.log(carsDetails);
// console.log(carsDetails.showCars());

// class newUser{
//     constructor(username, id){
//         this.username = username
//         this.id = id
//     }
//    printUser(){
//     console.log(`the print of user is ${this.username}`);
//    }

//    printId(){
//     console.log(`the user id is ${this.id}`);
//    }
// }

// const userCollect = new newUser("areeba", 19) 
// userCollect.printUser()
// userCollect.printId()

// class teacher extends newUser{
//     constructor(username, email, code){
//         super(username)
//         this.email = email
//         this.code = code
//     }
//    logMe(){
//     console.log(`my username is ${this.username}`);
//    }
//    getEmail(){
//     console.log(`we get user email ${this.email}`);
//    }
//    getCode(){
//     console.log(`the user code is ${this.code}`);
//    }
// }
// const getUser = new teacher("fahad", "fadi@gmail.com", "fhad$123")
// getUser.logMe()
// getUser.getEmail()
// getUser.getCode()




class team {
    constructor(playerName,playerBat){
        this.playerName = playerName
        this.playerBat = playerBat
    }

    showPlayer(){
        console.log(`the name of player is ${this.playerName}`);
    }

    showBat(){
        console.log(`the bat is ${this.playerBat}`);
    }
}

const result = new team("Virat Kholi", "MRF")
console.log(result);
console.log(result.showPlayer());
console.log(result.showBat());

function Users(username){
    console.log(username);
}

Users("fahad");