var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    animal.prototype.esMayor = function () {
        if (this.age > 2)
            return true;
        else
            return false;
    };
    ;
    return animal;
}());
var perro = /** @class */ (function (_super) {
    __extends(perro, _super);
    function perro(name, age, color, raza) {
        var _this = _super.call(this, name, age, color) || this;
        _this.raza = raza;
        return _this;
    }
    return perro;
}(animal));
var mascota = new perro("zeus", 9, "habano", "mestizo");
if (mascota.esMayor())
    console.log("es mayor");
else
    console.log("es cachorro");
