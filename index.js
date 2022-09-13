// Dependencies
const inquirer = require('inquirer');

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
                message: 'What is the manager\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the manager\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the manager\'s email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the manager\'s office number?'
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
                message: 'What is the engineer\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineer\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer\'s email?'
            },
            {
                type: 'input',
                name: 'GitHub',
                message: 'What is the engineer\'s GitHub uresname?'
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
                message: 'What is the intern\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern\'s email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern\'s school?'
            },
        ]).then(function(answers) {
            // console.log(answers);
            const { name, id, email, school } = answers;
            interns.push(new Intern(name, id, email, school));
            console.log(interns);
            createTeam();
        });
}


// create team after finished createManager()
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
                    //generateHTML();
                    return;
            }
        });
}


createManager();
