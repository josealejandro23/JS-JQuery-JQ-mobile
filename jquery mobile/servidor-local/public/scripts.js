$("#nosotros footer nav a").attr("style", "background:blue");

$("#chequear").bind("click", function () {
   $("#chequear input:checkbox").prop('checked') ? $("#nosotros footer li a").css("background", "yellow") : $("#nosotros footer li a").css("background", "red");
})

$("#grande").bind("click", () => {
   $("#inicio p").css("font-size", "2rem");
})

$("#pequeno").bind("click", () => {
   $("#inicio p").css("font-size", "1rem");
})

fetch('https://sserver.insoft.co/api/EsPrimo', {
   method: "post",
   headers: { Authorization: "Basic InSoftPruebas" },
   body: JSON.stringify({ numero: 9973 }),
})
.then(data => data.json())
.then(data => console.log(data))
.catch(err => new Error("error en acceso"));
