class vehiculo {
	private marca: string;
	private modelo: string;
	private color: string;
	constructor(b: string, modelo: string, color: string) {
		this.marca = b;
		this.modelo = modelo;
		this.color = color;
	}
	drive() {
		console.log(
			`Estoy conduciendo un ${this.marca}, el color es ${this.color}, el modelo es ${this.modelo}`
		);
	}
}
const automovil = new vehiculo("mazda", "alegro", "rojo");
automovil.drive();

class auto {
	constructor(
		private readonly marca: string,
		private readonly modelo: string,
		private readonly color: string
	) {}
	drive() {
		console.log(
			`Estoy manejando un ${this.marca} ${this.modelo}, color ${this.color}`
		);
	}
}

const carro = new auto("renault","megane","blanco");
carro.drive();