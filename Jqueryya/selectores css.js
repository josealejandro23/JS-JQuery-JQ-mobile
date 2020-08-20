let x = $(document);
x.ready(inicio);

function inicio() {
	var b = $("#button");
	var flag = true;
	b.click(() => {
		let x = $("#lista1 li");
		if (flag == true) {
			x.hide();
			flag = false;
			b.html("Mostrar la lista 1");
		} else {
			x.show();
			flag = true;
			b.html("Ocultar la Lista 1");
		}
	});
}
