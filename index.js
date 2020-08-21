const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?',
        default: 'test',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        default: 'test',

    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your git hub user name?',
        default: 'test',

    },
    {
        type: 'input',
        name: 'contact',
        message: 'email address to contact with questions?',
        default: 'test',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does the project do?',
        default: 'test',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does someone install this?',
        default: 'test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should someone go about using the project?',
        default: 'test',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Do you have a license fot this project?',
        default: 'test',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Do you allow other people to contribute?',
        default: 'test',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Does this project have any built in tests?',
        default: 'test',
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

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
        //repo header
        // fs.appendFileSync("README.md", ("# " + response.title) + '\n', function (err) {

        //     if (err) {
        //         console.log(err)
        //     }
        //     else {
        //         console.log("Success")
        //     }

        // })
        // //adds a line to refereance the developer
        // fs.appendFileSync("README.md", ("### **Name:  ** " + response.name + '\n') + '\n', function (err) {

        //     if (err) {
        //         console.log(err)
        //     }
        //     else {
        //         console.log("Success")
        //     }

        // })



        // //adds a line to refereance the developer
        // fs.appendFileSync("README.md", ("### **GitHub user name:  ** " + response.gitHub + '\n') + '\n', function (err) {

        //     if (err) {
        //         console.log(err)
        //     }
        //     else {
        //         console.log("Success")
        //     }

        // })

        // //adds a description
        // fs.appendFileSync("README.md", ('\n' + "## **Description:** " + '\n' + response.description + '\n') + '\n', function (err) {

        //     if (err) {
        //         console.log(err)
        //     }
        //     else {
        //         console.log("Success")
        //     }

        // })

        // //adds table of contents
        // fs.appendFileSync("README.md", ("## **Table of contents:  ** " + response.name + '\n') + '\n', function (err) {

        //     if (err) {
        //         console.log(err)
        //     }
        //     else {
        //         console.log("Success")
        //     }

        // })
    })
}

// function call to initialize program
init();

