const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Fraser', '000', 'test@mail.com', 'fthompson24');

    expect(engineer.name).toBe('Fraser');
    expect(engineer.id).toBe('000');
    expect(engineer.email).toBe('test@mail.com');
    expect(engineer.github).toBe('fthompson24');
});

test("returns engineer's name", () => {
    const engineer = new Engineer('Fraser', '000', 'test@mail.com', 'fthompson24');
    
    expect(engineer.getName()).toEqual(expect.stringContaining('Fraser'));
});

test("returns engineer's id", () => {
    const engineer = new Engineer('Fraser', '000', 'test@mail.com', 'fthompson24');

    expect(engineer.getId()).toEqual(expect.stringContaining('000'));
});

test("returns engineer's email", () => {
    const engineer = new Engineer('Fraser', '000', 'test@mail.com', 'fthompson24');
    
    expect(engineer.getEmail()).toEqual(expect.stringContaining('test@mail.com'));
});

test("returns engineer's role", () => {
    const engineer = new Engineer('Fraser', '000', 'test@mail.com', 'fthompson24');
    
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("returns engineer's github", () => {
    const engineer = new Engineer('Fraser', '000', 'test@mail.com', 'fthompson24');
    
    expect(engineer.getGithub()).toEqual(expect.stringContaining('fthompson24'));
});