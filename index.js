// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require ('./src/generateHTML')

// Constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managers = [];
const engineers = [];
const interns = [];


// Prompt user to create a manager when application starts
function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager\'s name?',
                validate: (answer) => {
                    if (answer !== '') {
                      return true;
                    }
                    return 'Please enter at least one character.';
                  },
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the manager\'s id?',
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter a number greater than zero.';
                  },
            },
        
            {
                type: 'input',
                name: 'email',
                message: 'What is the manager\'s email?',
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter an email address.';
                  },
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the manager\'s office number?',
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter a number greater than zero.';
                  },
            },

        ]).then(function (answers) {
            // console.log(answers);
            const { name, id, email, officeNumber } = answers;
            managers.push(new Manager(name, id, email, officeNumber));

            console.log(managers);

            createTeam();
        })
}


// Add an engineer when selected
function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer\'s name?',
                validate: (answer) => {
                    if (answer !== '') {
                      return true;
                    }
                    return 'Please enter at least one character.';
                  },
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineer\'s id?',
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter a number greater than zero.';
                  },
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer\'s email?',
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter an email address.';
                  },
            },
            {
                type: 'input',
                name: 'GitHub',
                message: 'What is the engineer\'s GitHub uresname?',
                validate: (answer) => {
                    if (answer !== '') {
                      return true;
                    }
                    return 'Please enter at least one character.';
                  },
            },
        ]).then(function(answers) {
            // console.log(answers);
            const { name, id, email, GitHub } = answers;
            engineers.push(new Engineer(name, id, email, GitHub));
            console.log(engineers);
            createTeam();
        });
}

// Add an intern when selected
function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern\'s name?',
                validate: (answer) => {
                    if (answer !== '') {
                      return true;
                    }
                    return 'Please enter at least one character.';
                  },
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern\'s id?',
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter a number greater than zero.';
                  },
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern\'s email?',
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter an email address.';
                  },
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern\'s school?',
                validate: (answer) => {
                    if (answer !== '') {
                      return true;
                    }
                    return 'Please enter at least one character.';
                  },
            },
        ]).then(function(answers) {
            // console.log(answers);
            const { name, id, email, school } = answers;
            interns.push(new Intern(name, id, email, school));
            console.log(interns);
            createTeam();
        });
}


// Create team after finished createManager()
function createTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuOption',
                message: 'Which type of employee would you like to add?',
                choices: ['Engineer', 'Intern', 'None']
            },
        ]).then(function(answers) {
            console.log(answers);

            switch (answers.menuOption) {
                case 'Intern':
                    createIntern();
                    break;
                case 'Engineer':
                    createEngineer();
                    break;
                default:
                    fs.writeFileSync('./dist/team.html', generateHTML({ managers, engineers, interns }));
                    console.log("Your HTML file is ready in dist folder!");
                    return;
            }
        });
}


createManager();
