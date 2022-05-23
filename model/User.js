const fs = require('fs');

class User {
    constructor(username, message) {
        this.username = username;
        this.message = message;
    }
    save() {
        let user = new User(this.username, this.message);
        let userJSON = JSON.stringify(user);
        // It allows to add objects one after the other, when the process is finished,
        // put '[' at the end of the ']' to make it an array
        fs.appendFileSync('./data/user.json', `${userJSON},`);
    }
}


module.exports = User;