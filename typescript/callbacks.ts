function imprimir(
	a: number,
	b: number,
	cb: (value: number) => void
): void {
	let resultado = a + b;
	cb(resultado);
}

function cb(b){
   console.log(b)
}

//imprimir(3, 5, cb);  
function promesa(cb:(msm,cb2)=>void,cb2:(msg:string)=>void){
	const msg = "han pasado 6 segundos";
	console.log("inicio de la función");
	setTimeout(() => {
		cb(msg,cb2);
	}, 3000);
}

function mensaje(msg:string,cb2:(msg:string)=>void){
	console.log("van 3 segundos");
	setTimeout(() => {
		cb2(msg)
	}, 3000);
}

function callback2(msg:string){
	console.log(msg);
}

promesa(mensaje,callback2);
