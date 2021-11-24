const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const questions = require('./src/questions')
const generateHTML = require('./src/generateHTML')
const Choice = require('inquirer/lib/objects/choice')
const { ChildProcess } = require('child_process')


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

const htmlEndTag = `
        </div>
    </body>
</html>`

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