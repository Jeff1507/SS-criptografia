const validarSenha = require('./senha');

test('Senha atende a todos os requisitos', () => {
    const senha = 'batata123';
    expect(validarSenha(senha)).toBe(true);
});

test('Senha não atende a todos os requisitos', () => {
    const senhaCurta = 'erro123';
    expect(validarSenha(senhaCurta)).toBe(false);

    const senhaSemNumero = 'senhaerrada';
    expect(validarSenha(senhaSemNumero)).toBe(false);

    const senhaSemLetra = '12345678';
    expect(validarSenha(senhaSemLetra)).toBe(false);

    const senhaSemLetraSemNumero = '!@#$%¨&*';
    expect(validarSenha(senhaSemLetraSemNumero)).toBe(false);
});