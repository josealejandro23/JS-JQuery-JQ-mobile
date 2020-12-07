class vehiculo {
	constructor(
		private readonly marca: string, //asequible solo desde la misma clase
		private readonly modelo: string,
		protected readonly color: string, //asequible por la clase padre e hijas
		private precio: number
	) {}
	//valor estático para ser accedido desde métodos estáticos
	static precioInicial = 3000;

	get precioActual() {
		return `El precio actual es de ${this.precio}`;
	}

	set fijarPrecio(precio) {
		if (precio > this.precio) {
			this.precio = precio;
		} else {
			console.log(`El nuevo precio debe ser mayor a ${this.precio}`);
		}
	}

	//creación de un método estático
	//solo puede acceder a valores definidos como estáticos
   static convertirPrecio(tipoMoneda:string){
      let result = "";
		switch (tipoMoneda) {
			case "dolar":
				result = "US " + this.precioInicial;
				break;
			case "pesos":
				result = "$ " + this.precioInicial;
				break;
			default:
				result = "Debe definir una moneda, dolar o pesos"
		}
		return result;
   }

	drive() {
		console.log(
			`Estoy conduciendo un ${this.marca}, el color es ${this.color}, el modelo es ${this.modelo}`
		);
	}
}

class carro extends vehiculo {
	drive() {
		console.log(`Estoy conduciendo un carro ${this.color}`);
	}
}

const automovil = new carro("mazda", "alegro", "rojo", 3400);
