var texto = "El éxito de tu marca empieza acá »";
var velocidad = 50; // velocidad de escritura en milisegundos

function escribirTexto(texto, elemento) {
  var i = 0;
  var intervalo = setInterval(function() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, velocidad);
}

var textoAnimado = document.getElementById("title0");
escribirTexto(texto, textoAnimado);
 
// Actualizar el tamaño del texto al cambiar el tamaño de la ventana del navegador
window.addEventListener('resize', function() {
  textoAnimado.style.fontSize = "4vw";
});