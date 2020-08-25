$("#nosotros footer nav a").attr("style","background:blue"); 

$("#chequear").bind("click", function () {
   $("#chequear input:checkbox").prop('checked') ? $("#nosotros footer li a").css("background", "yellow") : $("#nosotros footer li a").css("background", "red");
})

$("#grande").bind("click", ()=>{
   $("#inicio p").css("font-size","2rem");
})

$("#pequeno").bind("click", ()=>{
   $("#inicio p").css("font-size","1rem");
})

