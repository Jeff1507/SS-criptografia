const {celsiusParaFahrenheit, fahrenheitParaCelsius} = require('./temperatura');

test('Conversão de celsius para fahrenheit', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212);
});

test('Conversão de fahrenheit para celsius', () => {
    expect(fahrenheitParaCelsius(32)).toBe(0);
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100);
});