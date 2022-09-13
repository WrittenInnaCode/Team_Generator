const Manager = require('../lib/Manager');

it('can get role via getRole() method', () => {
    const me = new Manager('Inna', 1, 'writteninnacode@gmail.com');

    expect(me.getRole()).toEqual('Manager');
})

it('can set a officeNumber via constructor', () => {
    const me = new Manager('Inna', 1, 'writteninnacode@gmail.com', 'officeNumber');

    expect(me.officeNumber).toEqual('officeNumber');
})

it('can get officeNumber username via getOfficeNumber() method', () => {
    const me = new Manager('Inna', 1, 'writteninnacode@gmail.com', 'officeNumber');

    expect(me.getOfficeNumber()).toEqual('officeNumber');
})