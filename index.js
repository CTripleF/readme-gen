// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a title');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username? (Required)',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your Github username');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your e-mail addresss? (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your e-mail address');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project. (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the instructions for install if neccessary?',
    // validate: installInput => {
    //   if (installInput) {
    //     return true;
    //   } else {
    //     console.log('Please enter a title');
    //     return false;
    //   }
    // }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please describe any useful usage information.',
    // validate: usageInput => {
    //   if (usageInput) {
    //     return true;
    //   } else {
    //     console.log('Please enter a title');
    //     return false;
    //   }
    // }
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the guidelines for making a contribution to this project?',
    // validate: usageInput => {
    //   if (usageInput) {
    //     return true;
    //   } else {
    //     console.log('Please enter a title');
    //     return false;
    //   }
    // }
  },
  {
    type: 'list',
    name: 'license',
    message: 'What License is is associated with this project?',
    choices: ['MIT', 'Apache', 'MPL', 'None']
  },
];



const promptUser = () => {
  return inquirer.prompt(questions);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function(err) {     
    if (err) throw err;
    // if no error
    console.log("Data is written to file successfully.")
  });
}


// TODO: Create a function to initialize app
function init() {
  promptUser().then(readmeData => {
    writeToFile('README.md', readmeData)
})
}

// Function call to initialize app
init();
