
const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName){
        super(name, id, email);
        this.gitHubUserName = gitHubUserName
    }

    getGitHub() {
        return this.gitHubUserName
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer