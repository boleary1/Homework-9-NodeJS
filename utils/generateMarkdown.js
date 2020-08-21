// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### **Name:  **   ${data.name}

  ### **GitHub user name:  ** ${data.gitHub}
  ## **Description:**   ${data.description}
  ## **Table of contents:  ** ${data.name}
* [Installation](#description)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


`;
}

module.exports = generateMarkdown;
