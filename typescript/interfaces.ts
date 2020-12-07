enum rol {
	medico,
	asistente,
	administrativo,
}

interface Staff {
	nombre: string;
	mail: string;
	rol: rol;
}

interface facturador {
	total: number;
	facturaActual(): string;
}

const medico = {
	nombre: "carlos",
	mail: "asdfadf@test.com",
	rol: rol.administrativo,
	total: 34,
	facturaActual() {
		return `valor actual de la factura es de ${this.total}`;
	},
};

const mostrarPersonal = (Staff) => {
	console.log(Staff);
};

const imprimirFactura = (factura: facturador) => {
	console.log(factura.facturaActual());
};

imprimirFactura(medico);
