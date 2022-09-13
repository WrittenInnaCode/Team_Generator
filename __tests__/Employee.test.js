const Employee = require('../lib/Employee');


	it('should create a new employee object', () => {
		const me = new Employee('Inna', 1, 'writteninnacode@gmail.com');

		expect(typeof me).toBe('object');
	})

	it('can set a name via constructor', () => {
		const me = new Employee('Inna', 1, 'writteninnacode@gmail.com');

		expect(me.name).toEqual('Inna');
	})

	it('can set a id via constructor', () => {
		const me = new Employee('Inna', 1, 'writteninnacode@gmail.com');

		expect(me.id).toEqual(1);
	})

	it('can set a email via constructor', () => {
		const me = new Employee('Inna', 1, 'writteninnacode@gmail.com');

		expect(me.email).toEqual('writteninnacode@gmail.com');
	})

	it('can get email via getEmail() method', () => {
		const me = new Employee('Inna', 1, 'writteninnacode@gmail.com');

		expect(me.getEmail()).toEqual('writteninnacode@gmail.com');
	})

	it('can get name via getName() method', () => {
		const me = new Employee('Inna', 1, 'writteninnacode@gmail.com');

		expect(me.getName()).toEqual('Inna');
	})

	it('can get id via getId() method', () => {
		const me = new Employee('Inna', 1, 'writteninnacode@gmail.com');

		expect(me.getId()).toEqual(1);
	})

	it('can get role via getRole() method', () => {
		const me = new Employee('Inna', 1, 'writteninnacode@gmail.com');

		expect(me.getRole()).toEqual('Employee');
	})
