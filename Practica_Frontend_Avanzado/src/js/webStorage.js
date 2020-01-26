

var $ = require('jquery');
var i = 1;
// Recuperar el número de "Me gusta" de cada elemento al cargar la página


		$(document).ready(function() {
			for (i=1; i<11; i++)
			{
				var id_articulo = 'articulo' + i + '-me-gusta';
				var meGustaElemento = getMegusta(id_articulo);
				$('#' + id_articulo).text(meGustaElemento);
			}
		});


 // Función que recupera el número de "Me gusta" de un elemento


function getMegusta(elemento)
{
	if (typeof(Storage) !== "undefined") {

		// Obtener los "Me gusta" almacenados para el artículo

		var total_me_gusta = Number(localStorage.getItem(elemento));


		return total_me_gusta;
	}

	else {

		console.log("Este navegador no soporta Web Storage");
		return -1;
	}
}