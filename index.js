const inquirer = require('inquirer')
const fs = require('fs')

// const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

// const generateMangerContent = require('./src/generateHTML')

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

const generateMangerContent = (manager) => {   
return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"/>
        <link src="stylesheet" href="./style.css" />
    </head>
    <body>
        <header>
            <h1>MY TEAM</h1>
        </header>
    
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle">Manager</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}" 
            class="card-link">${manager.email}</a>
            </li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>`   
    }

const generateEngineerContent = (engineer) => {
return`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle">Engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}" 
            class="card-link">${engineer.email}</a>
            </li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHubUserName}" 
            class="card-link">${engineer.gitHubUserName}</a></li>
        </ul>
    </div>`
}

const generateInternContent = (intern) => {
return`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle">Intern</h6>
        </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}" 
            class="card-link">${intern.email}</a>
            </li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>`
}

const writeManagerContent = managerHTMLcontent => {
    fs.writeFile('./dist/index.html', managerHTMLcontent, err => {
        if (err) {
            console.log(err)
            return
        } 
    })
}

const appendEngineerContent = engineerHTMLcontent => {
    fs.appendFile('./dist/index.html', engineerHTMLcontent, err => {
        if (err) {
            console.log(err)
            return
        } 
    })
}
const appendInternContent = internHTMLcontent => {
    fs.appendFile('./dist/index.html', internHTMLcontent, err => {
        if (err) {
            console.log(err)
            return
        } 
    })
}

const endHTMLcontent = () => {
    fs.appendFile('./dist/index.html', '</body></html>', err => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log('Written Successfully!')
        }
    })
}


function renderManagerQuestions() {
    inquirer.prompt(managerQuestions)
    .then(managerAns => {
        const {name, id, email, officeNumber} = managerAns
        const manager = new Manager(name, id, email, officeNumber)
        const managerHTMLcontent = generateMangerContent(manager)
        writeManagerContent(managerHTMLcontent)

        if (managerAns.option === "Add an Engineer"){
            renderEngineerQuestions()
        }
        if (managerAns.option === "Add an Intern"){
            renderInternQuestions()
        }
        if (managerAns.option === "Finish Building Team") {
            endHTMLcontent()
        }          
    })
}

function renderEngineerQuestions(){
    inquirer
    .prompt(engineerQuestions)
    .then(engineerAns => {
        const {name, id, email, gitHubUserName} = engineerAns
        const engineer = new Engineer(name, id, email, gitHubUserName)
        const engineerHTMLcontent = generateEngineerContent(engineer)
        appendEngineerContent(engineerHTMLcontent)
        
        if (engineerAns.option === "Add an Engineer"){
            renderEngineerQuestions()
        }
        if (engineerAns.option === "Add an Intern"){
            renderInternQuestions()
        }
        if (engineerAns.option === "Finish Building Team"){
            endHTMLcontent()
        }
    })
}

function renderInternQuestions(){
    inquirer
    .prompt(internQuestions)
    .then(internAns => {
        const {name, id, email, school} = internAns
        const intern = new Intern(name, id, email, school)
        const internHTMLcontent = generateInternContent(intern)
        appendInternContent(internHTMLcontent)

        if (internAns.option === "Add an Engineer"){
            renderEngineerQuestions()
        }
        if (internAns.option === "Add an Intern"){
            renderInternQuestions()
        }
        if (internAns.option === "Finish Building Team"){
            endHTMLcontent()
        }
    })
}
renderManagerQuestions()