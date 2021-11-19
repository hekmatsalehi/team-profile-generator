const inquirer = require('inquirer')



const managerQuestions = [
    {
        type: 'input',
        message: 'Enter manager name?',
        name: 'managerName', 
    },
    {
        type: 'input',
        message: 'Enter manager Employee ID?',
        name: 'managerID', 
    },
    {
        type: 'input',
        message: 'Enter manager Email address?',
        name: 'managerEmail', 
    },
    {
        type: 'input',
        message: 'Enter manager office number?',
        name: 'managerOfficeNumber', 
    }


]


const optionList = [
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
        message: 'Enter Engineer name?',
        name: 'engineerName', 
    },
    {
        type: 'input',
        message: 'Enter Engineer Employee ID?',
        name: 'engineerID', 
    },
    {
        type: 'input',
        message: 'Enter Engineer Email address?',
        name: 'engineerEmail', 
    },
    {
        type: 'input',
        message: 'Enter Engineer gitHub username?',
        name: 'engineerGitHubUserName', 
    }
]    



   inquirer
    .prompt(managerQuestions)
    .then(answers => {
        console.log(answers)
    })

