function validarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }

    const letras = /[a-zA-Z]/.test(senha);
    const numeros = /\d/.test(senha);

    return letras && numeros;
}

module.exports = validarSenha;