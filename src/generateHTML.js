const generateManagerContent = (manager) => {   
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"/>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="jumbotron jumbotron-fluid bg-primary d-flex align-content-around flex-wrap bg-primary custom-header">
        <div class="container">
            <h1 class="text-center custom-title-color">Team Profile</h1>
        </div>
    </header>
        <div class="d-flex flex-row flex-wrap justify-content-center">
        <div class="card shadow bg-secondary custom-card-margin" style="width: 18rem;">
            <div class="card-body custom-card-header">
                <h5 class="card-title custom-title-color">${manager.name}</h5>
                <h6 class="card-subtitle custom-title-color"><i class="fas fa-coffee"></i> Manager</h6>
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
        <div class="card shadow bg-secondary custom-card-margin" style="width: 18rem;">
            <div class="card-body custom-card-header">
                <h5 class="card-title custom-title-color">${engineer.name}</h5>
                <h6 class="card-subtitle custom-title-color"><i class="fas fa-hard-hat"></i> Engineer</h6>
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
        <div class="card shadow bg-secondary custom-card-margin" style="width: 18rem;">
            <div class="card-body custom-card-header">
                <h5 class="card-title custom-title-color">${intern.name}</h5>
                <h6 class="card-subtitle custom-title-color"><i class="fas fa-university"></i> Intern</h6>
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


module.exports = {
    generateManagerContent,
    generateEngineerContent,
    generateInternContent
}