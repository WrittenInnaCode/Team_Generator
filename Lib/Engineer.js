const Employee = require('./Employee');

class Engineer extends Employee {
    // Engineer Constructor
    constructor(name, id, email, GitHub){
        super(name, id, email);
        this.GitHub = GitHub;
    }
    
    getGitHub(){
        return this.GitHub;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;