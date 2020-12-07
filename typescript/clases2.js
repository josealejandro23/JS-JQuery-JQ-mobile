class vehiculo {
    constructor(marca, //asequible solo desde la misma clase
    modelo, color, //asequible por la clase padre e hijas
    precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
    }
    get precioActual() {
        return `El precio actual es de ${this.precio}`;
    }
    set fijarPrecio(precio) {
        if (precio > this.precio) {
            this.precio = precio;
        }
        else {
            console.log(`El nuevo precio debe ser mayor a ${this.precio}`);
        }
    }
    //creación de un método estático
    //solo puede acceder a valores definidos como estáticos
    static convertirPrecio(tipoMoneda) {
        let result = "";
        switch (tipoMoneda) {
            case "dolar":
                result = "US " + this.precioInicial;
                break;
            case "pesos":
                result = "$ " + this.precioInicial;
                break;
            default:
                result = "Debe definir una moneda, dolar o pesos";
        }
        return result;
    }
    drive() {
        console.log(`Estoy conduciendo un ${this.marca}, el color es ${this.color}, el modelo es ${this.modelo}`);
    }
}
//valor estático para ser accedido desde métodos estáticos
vehiculo.precioInicial = 3000;
class carro extends vehiculo {
    drive() {
        console.log(`Estoy conduciendo un carro ${this.color}`);
    }
}
const automovil = new carro("mazda", "alegro", "rojo", 3400);
