
const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber

    }

    getRole() {
        return 'Manager'

    }

    getOfficNumber() {
        return this.officeNumber
    }

}

// const manager = new Manager('TOM', 456, 'tom@gmail.com', 6)

// console.log(manager)
// manager.getRole()

module.exports = Manager