const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, email, name, GitHub){
        super(id, email, name);
        this.GitHub = GitHub;
    }
}

module.exports = Engineer;