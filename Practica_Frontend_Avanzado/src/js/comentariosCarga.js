var $ = require('jquery');
var utils = require('./utils');

var comentariosApiClient = require('./comentariosApiClient');

var cargaComentarios = true;

function verComentarios(response) {

	if (cargaComentarios) {

		$('.articulo-comentarios').html('');
		var cabecera = '<div class="row"><h2>Lista de comentarios</h2></div>';
		var html = cabecera;
		for (var i in response) {
		    var comentario = response[i];
		    var nombre = utils.escapeHTML(comentario.nombre || "");
		    var apellidos = utils.escapeHTML(comentario.apellidos || "") ;
		    var email = utils.escapeHTML(comentario.email || "");
		    var comentario = utils.escapeHTML(comentario.comentario || "");
		    html += '<article class="articulo-comentario">';
		    html += '<div class="articulo-autor-nombre">' + nombre + ' ' + apellidos + ' ' + '(' + email + ')' + '</div>';
		    html += '<div class="articulo-parrafo-resumen">' + comentario + '</div>'
		    html += '</article>';
		}
		 $('.articulo-comentarios').append(html);
		 cargaComentarios = false;
	}
}

module.exports = {
	load: function() {
		comentariosApiClient.load(
			function(response) {

				cargaComentarios = true;
				verComentarios(response);
			}, function(response) {
				console.log("ERROR", response);
			}
		);
	}
}

// evento que se ejecuta cuando se mueve el scroll de la pagina

$(document).scroll(function() {


	if ($(document).scrollTop() >= 694 && cargaComentarios) {

		comentariosApiClient.load(
			function(response) {

				verComentarios(response);
			}, function(response) { // error
				console.log("ERROR", response);
			}
		);
	}
});