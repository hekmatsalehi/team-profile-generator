const Intern = require('../lib/intern')

test('Should retrun intern Object', () => {
    const intern = new Intern('Alex', 122, 'alex@gmial.com', 'UCSD')
    expect(typeof(intern)).toBe('object')
})

test('Should return Intern school from getSchool method', () => {
    const school = 'UCSD'
    const intern = new Intern('Alex', 122, 'alex@gmial.com', school)
    expect(intern.getSchool()).toBe(school)
})

test('Should return role from getRole method', () => {
    const role = 'Intern'
    const intern = new Intern('Alex', 122, 'alex@gmial.com', 'UCSD')
    expect(intern.getRole()).toBe(role)
})