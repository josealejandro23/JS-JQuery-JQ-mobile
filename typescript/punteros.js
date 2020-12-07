var suma = function (val1, val2) {
    return val1 + val2;
};
//Se asigna una función a una variable mediante el puntero
var sumar2;
sumar2 = suma;
console.log(sumar2(4, 5));
