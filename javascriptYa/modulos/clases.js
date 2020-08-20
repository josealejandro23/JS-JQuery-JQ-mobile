export class Persona {
	constructor(nombre, apellido, edad) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
	}

	imprimir() {
		document.write(
			`El nombre de la personas es: ${this.nombre} ${this.apellido} y tiene ${this.edad} años de edad`
		);
	}
}

export class Empleado extends Persona {
	constructor(nombre, apellido, edad, puesto, salario) {
		super(nombre, apellido, edad);
		this.puesto = puesto;
		this.salario = salario;
	}

	imprimir() {
		super.imprimir();
		document.write(
			`<br>Trabaja como ${this.puesto} y gana ${this.salario} cada mes`
		);
	}
}
