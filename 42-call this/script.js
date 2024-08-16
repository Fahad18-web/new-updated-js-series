function users(username) {
    this.username = username

}

class setUsers {
    constructor(id, gmail, password) {
        users.call(this, username)
        this.id = id
        this.gmail = gmail
        this.password = password
    }
}

const userData = new infoUsers("fa-002", "fahad@gmail.com", "2334")
console.log(userData);