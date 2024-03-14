const helloWorld = require('./helloworld');

test('should return "Hello World"', () => {
    const result = helloWorld();

    expect(result).toBe('Hello World');
});