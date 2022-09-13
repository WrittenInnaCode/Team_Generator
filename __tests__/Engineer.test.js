const Engineer = require('../lib/Engineer');

it('can get role via getRole() method', () => {
    const me = new Engineer('Inna', 1, 'writteninnacode@gmail.com');

    expect(me.getRole()).toEqual('Engineer');
})

it('can set a GitHub via constructor', () => {
    const me = new Engineer('Inna', 1, 'writteninnacode@gmail.com', 'GitHub');

    expect(me.GitHub).toEqual('GitHub');
})

it('can get GitHub username via getGitHub() method', () => {
    const me = new Engineer('Inna', 1, 'writteninnacode@gmail.com', 'GitHub username');

    expect(me.getGitHub()).toEqual('GitHub username');
})

