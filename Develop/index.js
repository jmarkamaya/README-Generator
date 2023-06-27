// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { log } = require('console');

// TODO: Create an array of questions for user input
// const questions = [];

const generateREADME = ({projectName, question1, question2, question3, question4, repoUrl}) =>
`
# ${projectName}
## ${question1}
## ${question2}
## ${question3}
## ${question4}
## ${repoUrl}`;

inquirer
.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'what is your project name?'
    },
    {
        type: 'input',
        name: 'question1',
        message: 'What was your motivation?'
        
    },
    {
        type: 'input',
        name: 'question2',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'question3',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'question4',
        message: 'What did you learn?'
        
    },
    {
        type: 'input',
        name: 'repoUrl',
        message: 'What makes your project stand out?'
    },


])

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

.then((answers) => {
    const readMePageContent = generateREADME(answers);

fs.writeFile('README.md', readMePageContent, (err) => 
    err ? console.log(err) :
        console.log("Data has beenwritten to file successfully."));
    
})

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
