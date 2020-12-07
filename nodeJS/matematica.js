"use strict";
exports.__esModule = true;
exports.mostrarErrorDivision = exports.multiplicar = exports.dividir = exports.Restar = exports.sumar = exports.pi = void 0;
exports.pi = 3.1416;
function sumar(a, b) {
    var res;
    res = a + b;
    return res;
}
exports.sumar = sumar;
function Restar(a, b) {
    return a - b;
}
exports.Restar = Restar;
function dividir(a, b) {
    if (b == 0) {
        mostrarErrorDivision();
    }
    else {
        return a / b;
    }
}
exports.dividir = dividir;
function multiplicar(a, b) {
    return a * b;
}
exports.multiplicar = multiplicar;
function mostrarErrorDivision() {
    console.log('no se puede dividir entre 0');
}
exports.mostrarErrorDivision = mostrarErrorDivision;
