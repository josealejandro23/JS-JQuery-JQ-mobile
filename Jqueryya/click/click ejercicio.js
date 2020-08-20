let x = $(document);
x.ready(inicar);

function inicar(){
   let x = $('#parrafo1')
   x.click(() => {
      alert('hiciste click sobre el parrafo');
   });
}