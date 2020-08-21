const fs = require("fs");
// const axios = require("axios"); not needed 
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    // What is tha name of the app?
    {
        type: 'input',
        name: 'repositoryName',
        message: 'What is the name of your application?',
    },
    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is your git hub user name?',
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log("Inside the init function")
    inquirer.prompt(questions).then((response) => {

        // this will Create the first line and main header for the repo (that is what the "# " is for) using the users resonse to RepoName
        fs.appendFileSync("README.md", ("# " + response.repositoryName) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })
        // this will create the 2nd line of readme discribing the application was developed by the users reponse to githubname 
        fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubUserName + '\n') + '\n', function (err) {

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

