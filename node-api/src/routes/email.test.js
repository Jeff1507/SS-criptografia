const validarEmail = require('./email');

test('Valida o email', () => {
    const email = 'exemplo@gmail.com';

    expect(validarEmail(email)).toBe(true);
});
test('Rejeita um email', () => {
    const email = 'exemplo@gmail';
    expect(validarEmail(email)).toBe(false);
  });