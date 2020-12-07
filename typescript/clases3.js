//abstract evita que la clase pueda ser intanciada y obliga
//a instanciar solamente clases hijas, ya que la clase padre
//no tiene sentido por si sola
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
}
//valor estático para ser accedido desde métodos estáticos
vehiculo.precioInicial = 3000;
//Al usar implements deben utilizarse todas las características
//de la interface definida
class carro extends vehiculo {
    drive() {
        console.log(`Estoy conduciendo un carro ${this.color}`);
    }
    facturaActual() {
        return `el precio es ${this.precioActual}`;
    }
}
//Esta clase puede utilizar las características de las 
//interfaces volador y facturable
class avion extends vehiculo {
    drive() {
        console.log(`Estoy volando en un avion ${this.marca}`);
    }
    facturaActual() {
        return `el precio actual es de ${this.precioActual}`;
    }
    altitud() {
        return 'La altura máxima es de 2000 pies';
    }
}
const automovil = new carro("mazda", "alegro", "rojo", 3400);
const avion1 = new avion("airbus", "380", "azul", 1000000);
console.log(avion1.facturaActual());
console.log(avion1.altitud());
