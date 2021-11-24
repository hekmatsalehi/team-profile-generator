const Employee = require('../lib/employee')

test('Should return an object', () => {
    const employee = new Employee('Hekamt', 123, 'hekmat@gmail.com')
    expect(typeof(employee)).toBe('object')
})

test('Should return name from getName method', () => {
    const name = 'Hekmat'
    const employee = new Employee('Hekmat')
    expect(employee.getName()).toBe(name)
})

test('Should return id from getId method', () => {
    const id = 222
    const employee = new Employee('Hekmat', id)
    expect(employee.getId()).toBe(id)
})

test('Should return email from getEmail method', () => {
    const email = 'hekmat@gmail.com'
    const employee = new Employee('Hekmat', 222, email)
    expect(employee.getEmail()).toBe(email)
})

test('Should return role from getRole method', () => {
    const role = 'Employee'
    const employee = new Employee('Hekmat', 222, 'hekmat@gmail.com')
    expect(employee.getRole()).toBe(role)
})