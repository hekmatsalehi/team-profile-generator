const managerQuestions = [
    {
        type: 'input',
        message: 'Enter manager\'s name?',
        name: 'name', 
    },
    {
        type: 'input',
        message: 'Enter manager\'s Employee ID?',
        name: 'id', 
    },
    {
        type: 'input',
        message: 'Enter manager\'s Email address?',
        name: 'email', 
    },
    {
        type: 'input',
        message: 'Enter manager\'s office number?',
        name: 'officeNumber', 
    },
    {
        type: 'list',
        message: 'Please choose from the following:',
        name: 'option',
        choices: [ "Add an Engineer", "Add an Intern", "Finish Building Team"]
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'Enter Engineer\'s name?',
        name: 'name', 
    },
    {
        type: 'input',
        message: 'Enter Engineer\'s Employee ID?',
        name: 'id', 
    },
    {
        type: 'input',
        message: 'Enter Engineer\'s Email address?',
        name: 'email', 
    },
    {
        type: 'input',
        message: 'Enter Engineer\'s gitHub username?',
        name: 'gitHubUserName', 
    },
    {
        type: 'list',
        message: 'Please choose from the following:',
        name: 'option',
        choices: [ "Add an Engineer", "Add an Intern", "Finish Building Team"]
    }
]    

const internQuestions = [
    {
        type: 'input',
        message: 'Enter Intern\'s name?',
        name: 'name', 
    },
    {
        type: 'input',
        message: 'Enter Intern\'s Employee ID?',
        name: 'id', 
    },
    {
        type: 'input',
        message: 'Enter Intern\'s Email address?',
        name: 'email', 
    },
    {
        type: 'input',
        message: 'Enter Intern\'s school name?',
        name: 'school', 
    },
    {
        type: 'list',
        message: 'Please choose from the following:',
        name: 'option',
        choices: [ "Add an Engineer", "Add an Intern", "Finish Building Team"]
    }
]    



module.exports = {managerQuestions, engineerQuestions, internQuestions}