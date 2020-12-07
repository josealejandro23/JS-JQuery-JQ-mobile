"use strict";
exports.__esModule = true;
//el valor asignado solo puede ser uno de los declarados
var color1 = "rojo";
//el valor asignado solo puede ser uno de los declarados
var dado1 = 4;
var result = {
    esValido: true,
    reason: null
};
var result2 = {
    esValido: false,
    reason: "error de login"
};
if (!result2.esValido) {
    console.log(result2.reason);
}
exports["default"] = {};
