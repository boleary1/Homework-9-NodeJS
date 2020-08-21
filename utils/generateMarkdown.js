// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### Name:    
  ${data.name}

  ### GitHub user name:  
  ${data.gitHub}

  ## Table of contents:  
  * [description](#description)
  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [Testing](#testing)
  * [Questions](#questions)
  
  
  
  
  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## license:
  ${data.license}

  ## Testing:
  ${data.tests}
  
  ## Questions:
  Contact ${data.name} with any questions at ${data.contact}





`;
}

module.exports = generateMarkdown;
