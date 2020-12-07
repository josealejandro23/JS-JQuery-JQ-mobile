var vehiculo = /** @class */ (function () {
    function vehiculo(b, modelo, color) {
        this.marca = b;
        this.modelo = modelo;
        this.color = color;
    }
    vehiculo.prototype.drive = function () {
        console.log("Estoy conduciendo un " + this.marca + ", el color es " + this.color + ", el modelo es " + this.modelo);
    };
    return vehiculo;
}());
var automovil = new vehiculo("mazda", "alegro", "rojo");
automovil.drive();
var auto = /** @class */ (function () {
    function auto(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
    auto.prototype.drive = function () {
        console.log("Estoy manejando un " + this.marca + " " + this.modelo + ", color " + this.color);
    };
    return auto;
}());
var carro = new auto("renault", "megane", "blanco");
carro.drive();
