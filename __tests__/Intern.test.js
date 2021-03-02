const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Fraser', '000', 'test@mail.com', 'Vanderbilt');

    expect(intern.name).toBe('Fraser');
    expect(intern.id).toBe('000');
    expect(intern.email).toBe('test@mail.com');
    expect(intern.school).toBe('Vanderbilt');
});

test("returns intern's name", () => {
    const intern = new Intern('Fraser', '000', 'test@mail.com', 'Vanderbilt');
    
    expect(intern.getName()).toEqual(expect.stringContaining('Fraser'));
});

test("returns intern's id", () => {
    const intern = new Intern('Fraser', '000', 'test@mail.com', 'Vanderbilt');

    expect(intern.getId()).toEqual(expect.stringContaining('000'));
});

test("returns intern's email", () => {
    const intern = new Intern('Fraser', '000', 'test@mail.com', 'Vanderbilt');
    
    expect(intern.getEmail()).toEqual(expect.stringContaining('test@mail.com'));
});

test("returns intern's role", () => {
    const intern = new Intern('Fraser', '000', 'test@mail.com', 'Vanderbilt');
    
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test("returns intern's school", () => {
    const intern = new Intern('Fraser', '000', 'test@mail.com', 'Vanderbilt');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining('Vanderbilt'));
});