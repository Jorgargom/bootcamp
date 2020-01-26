var $ = require('jquery');

$('.articulo').on("click", function() {
	window.location.href = 'comentarios_articulo.html';
});


// Pulsando en el número de comentarios lleva a la lista de comentarios del detalle del artículo

$('.autor-comentarios').on("click", function() {
	window.location.href = 'comentarios_articulo.html#articulo-comentarios';
});