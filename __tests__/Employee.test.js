const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Fraser', '000', 'test@mail.com');

    expect(employee.name).toBe('Fraser');
    expect(employee.id).toBe('000');
    expect(employee.email).toBe('test@mail.com');
});

test("returns employee's name", () => {
    const employee = new Employee('Fraser', '000', 'test@mail.com');
    
    expect(employee.getName()).toEqual(expect.stringContaining('Fraser'));
});

test("returns employee's id", () => {
    const employee = new Employee('Fraser', '000', 'test@mail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('000'));
});

test("returns employee's email", () => {
    const employee = new Employee('Fraser', '000', 'test@mail.com');
    
    expect(employee.getEmail()).toEqual(expect.stringContaining('test@mail.com'));
});

test("returns employee's role", () => {
    const employee = new Employee('Fraser', '000', 'test@mail.com');
    
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});