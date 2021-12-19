// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, username, title) {
  if (license === 'None') {
    return '';
  }
  else {
    // wont return full badge unless repo has a license
    return `<img src="https://img.shields.io/github/license/${username}/${title}">`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  else {
    return `*[License](#License)`
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  else {
    return `## License
${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license, data.username, data.title)}

## Description
${data.description}

## Table of Contents
*[Installation](#Installation)

*[Usage](#Usage)

*[Contributing](#Contributing)

*[Tests](#Tests)

*[Credits](#Credits)

*[Questions](#Questions)

${renderLicenseLink(data.license)}

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests

## Credits
${data.username}

## Questions
for any additional questions please e-mail me at:

${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
