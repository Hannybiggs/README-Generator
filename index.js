// Packages needed for this application

const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


inquirer
  .prompt([
    {
      type: 'input',
      message: "What's the title of your project?",
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do people use your project?',
      name: 'usage',
    },
    {
    //use a list so that user can select licenses from a list
    //will include badge for the license in the README file
      type: 'list',
      message: 'What license applies to this repository?',
      choices: ["MIT", "Apache License 2.0", "GNU General Public License 3.0", "GNU General Public License 2.0"],
      name: 'license',
    },
    {
      type: 'input',
      message: 'How do people contribute to your project?',
      name: 'contributing',
    },
    {
     type: 'input',
     message: 'Where should people address questions if they have any?',
     name: 'questions',
    },
  ]).then(answers => {
    generateMarkdown(answers);
    console.log(answers);
    writeToFile('README1.md', answers);
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), 'utf8', function(error){
    if (error) throw error;
    console.log("Successfully wrote to the file!");
  })
}