const Manager = require('../lib/manager')

test('Should return manager object', () => {
    const manager = new Manager('Khan', 343, 'khan@gmail.com', 45)
    expect(typeof(manager)).toBe('object')
})

test('Should return role from getRole method', () => {
    const role = 'Manager'
    const manager = new Manager('Khan', 343, 'khan@gmail.com')
    expect(manager.getRole()).toBe(role)
})

test('Should return office number from getOfficeNumber method', () => {
    const officeNumber = 45
    const manager = new Manager('Khan', 343, 'khan@gmail.com', officeNumber)
    expect(manager.getOfficNumber()).toBe(officeNumber)
})