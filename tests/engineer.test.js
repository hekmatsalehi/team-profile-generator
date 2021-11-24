const Engineer = require('../lib/engineer')

test('Should return Engineer object', () => {
    const engineer = new Engineer('Tom', 22, 'tom@gmail.com', 'tom123')
    expect(typeof(engineer)).toBe('object')
})

test('Should return gitHub user name from getGitHub method', () => {
    const gitHubUserName = 'hekmatsalehi'
    const engineer = new Engineer('Tom', 22, 'tom@gmail.com', gitHubUserName)
    expect(engineer.getGitHub()).toBe(gitHubUserName)
})

test('Should return role from getRole method', () => {
    const role = 'Engineer'
    const engineer = new Engineer('Tom', 22, 'tom@gmail.com', 'hekmatsalehi')
    expect(engineer.getRole()).toBe(role)
})