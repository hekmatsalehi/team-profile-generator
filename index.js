const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const questions = require('./src/questions')
const generateHTML = require('./src/generateHTML')
const Choice = require('inquirer/lib/objects/choice')
const { ChildProcess } = require('child_process')

// Prompt manager questions and generate HTML for manager
function renderManagerQuestions() {
    inquirer.prompt(questions.managerQuestions)
    .then(managerAns => {
        const {name, id, email, officeNumber} = managerAns
        const manager = new Manager(name, id, email, officeNumber)
        const managerHTMLcontent = generateHTML.generateManagerContent(manager)
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


    // .then( () => {
    //     if (managerAns.option === "Finish Building Team"){
    //         endHTMLcontent()
    //     }
    // })

}

// Prompt Engineer questions and generate HTML card for engineer
function renderEngineerQuestions(){
    inquirer
    .prompt(questions.engineerQuestions)
    .then(engineerAns => {
        const {name, id, email, gitHubUserName} = engineerAns
        const engineer = new Engineer(name, id, email, gitHubUserName)
        const engineerHTMLcontent = generateHTML.generateEngineerContent(engineer)
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
    
    // .then( () => {
    //     if (engineerAns.option === "Finish Building Team"){
    //         endHTMLcontent()
    //     }
    // })

}

// Prompt Intern questions and generate HTML card for Intern
function renderInternQuestions(){
    inquirer
    .prompt(questions.internQuestions)
    .then(internAns => {
        const {name, id, email, school} = internAns
        const intern = new Intern(name, id, email, school)
        const internHTMLcontent = generateHTML.generateInternContent(intern)
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

    // .then( () => {
    //     if (internAns.option === "Finish Building Team"){
    //         endHTMLcontent()
    //     }
    // })   

}

// Write manager's HTML content
const writeManagerContent = managerHTMLcontent => {
    fs.writeFile('./dist/index.html', managerHTMLcontent, err => {
        if (err) {
            console.log(err)
            return
        } 
    })
}

// Append Engineer card to HTML file
const appendEngineerContent = engineerHTMLcontent => {
    fs.appendFile('./dist/index.html', engineerHTMLcontent, err => {
        if (err) {
            console.log(err)
            return
        } 
    })
}

// Append Intern card to HTML file
const appendInternContent = internHTMLcontent => {
    fs.appendFile('./dist/index.html', internHTMLcontent, err => {
        if (err) {
            console.log(err)
            return
        } 
    })
}

const htmlEndTag = `
        </div>
    </body>
</html>`

// Add ending tags to HTML file
const endHTMLcontent = () => {
    fs.appendFile('./dist/index.html', htmlEndTag, err => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log('Written Successfully!')
        }
    })
}

renderManagerQuestions()