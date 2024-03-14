const dividir = require('./matematica');

test('lança uma exceção ao dividir por 0', () => {
    expect (() => dividir(5, 0)).toThrow("Divisão por 0 não é permitida");
});