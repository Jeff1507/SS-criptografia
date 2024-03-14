function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error("Divisão por 0 não é permitida");
    }
    return dividendo/divisor;
}
module.exports = dividir;