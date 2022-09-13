const Intern = require('../lib/Intern');

it('can get role via getRole() method', () => {
    const me = new Intern('Inna', 1, 'writteninnacode@gmail.com');

    expect(me.getRole()).toEqual('Intern');
})

it('can set a school via constructor', () => {
    const me = new Intern('Inna', 1, 'writteninnacode@gmail.com', 'school');

    expect(me.school).toEqual('school');
})

it('can get school username via getschool() method', () => {
    const me = new Intern('Inna', 1, 'writteninnacode@gmail.com', 'school');

    expect(me.getSchool()).toEqual('school');
})
