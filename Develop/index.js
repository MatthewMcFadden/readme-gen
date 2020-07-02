const inquirer = require("inquirer");
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const generatePage = require('./src/readme-template');

// array of questions for user
const questions = readmeData => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (Required)',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Please enter name of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: projectDescriptionInput => {
        if (projectDescriptionInput) {
          return true;
        } else {
          console.log('Please enter a description for your project!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmInstall',
      message: 'Would you like to include an installation section?',
      default: true
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide install steps for the installation section.',
      when: ({ confirmInstall }) => confirmInstall
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
      return portfolioData;
    }
  );
};

questions ()
.then(portfolioData => {
  return generatePage(portfolioData);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});