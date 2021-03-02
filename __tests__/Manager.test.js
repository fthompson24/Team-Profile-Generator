const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Fraser', '000', 'test@mail.com', '555');

    expect(manager.name).toBe('Fraser');
    expect(manager.id).toBe('000');
    expect(manager.email).toBe('test@mail.com');
    expect(manager.officeNumber).toBe('555');
});

test("returns manager's name", () => {
    const manager = new Manager('Fraser', '000', 'test@mail.com', '555');
    
    expect(manager.getName()).toEqual(expect.stringContaining('Fraser'));
});

test("returns manager's id", () => {
    const manager = new Manager('Fraser', '000', 'test@mail.com', '555');

    expect(manager.getId()).toEqual(expect.stringContaining('000'));
});

test("returns manager's email", () => {
    const manager = new Manager('Fraser', '000', 'test@mail.com', '555');
    
    expect(manager.getEmail()).toEqual(expect.stringContaining('test@mail.com'));
});

test("returns manager's office number", () => {
    const manager = new Manager('Fraser', '000', 'test@mail.com', '555');
    
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('555'));
});