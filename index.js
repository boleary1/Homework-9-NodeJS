const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your Gitub user name?',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does this project do?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does someone install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Directions for using this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Do you have a license for this project?',
        choices: [ "Apache_License_2.0", "MIT_License", "Other", "None" ],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Do you allow other people to contribute? If so, anything they should know?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Does this project have any built in tests?',
    }
];


// function to initialize program
function init() {
    console.log("Inside the init function")
    inquirer.prompt(questions).then((response) => {
        fs.writeFileSync("exampleREADME.md", generateMarkdown(response) , function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        })
    })
}

// function call to initialize program
init();

