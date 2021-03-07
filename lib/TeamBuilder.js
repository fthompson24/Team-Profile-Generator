const inquirer = require('inquirer');
const generateHTML = require('../src/generateHTML');
const writeToFile = require('../src/writeToFile');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class TeamProfile {
    constructor() {
        this.manager;
        this.employees = [];
    }

    buildTeamProfile() {

        inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Name required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the manager's id?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("ID required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the manager's email?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Email required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Office number required.");
                        return false;
                    }
                }
            }
        ])

        .then(({name, id, email, officeNumber}) => {
            this.manager = new Manager(name, id, email, officeNumber);

            this.addEmployee()
        });
    }

    addEmployee() {
        inquirer
        .prompt({
            type: 'list',
            message: 'Add to team?',
            name: 'selection',
            choices: ['Engineer', 'Intern', 'Finish Team']
        })
        .then(({selection}) => {
            switch (selection) {
            case 'Engineer':
                this.addEngineer();
                break;
            case 'Intern':
                this.addIntern();
                break;
            case 'Finish Team':
                this.finishTeam();
                break;
            };
        });
    };

    addEngineer() {
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Name required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the engineer's id?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("ID required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the engineer's email?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Email required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("GitHub username is required.");
                        return false;
                    }
                }
            }
        ])

        .then(({name, id, email, github}) => {
            
            this.employees.push(new Engineer(name, id, email, github));

            this.addEmployee()
        });
    }

    addIntern() {
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Name required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the intern's id?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("ID required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the intern's email?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Email required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'school',
                message: "What school does the intern attend?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("School required.");
                        return false;
                    }
                }
            }
        ])

        .then(({name, id, email, school}) => {

            this.employees.push(new Intern(name, id, email, school));

            this.addEmployee()
        });
    }

    finishTeam() {
        writeToFile(generateHTML(this))
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = TeamProfile;