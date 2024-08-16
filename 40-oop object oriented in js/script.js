// js mai new keyword ko hm constructor function kehte hain

//  new keyword apko aik instense create kerke deta hai or is keyword se aik empty object bhi create hota hai

// constructure property refrense hoti hai khud hi ke bare mai

const user1 = {
    username: 'fahad',
    password: 123,
    loggedIn: true,

    calluser: function(){
       console.log(`this.${this.username}`);
       return this
    }
    
}

// instenseof