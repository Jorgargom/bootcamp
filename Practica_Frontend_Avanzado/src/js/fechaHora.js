var $ = require('jquery');


var moment = require('moment');

var dias_semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

var fecha_hora_publicacion1 = $('#fecha-hora-publicacion1').text();
var fecha_hora_publicacion2 = $('#fecha-hora-publicacion2').text();
var fecha_hora_publicacion3 = $('#fecha-hora-publicacion3').text();
var fecha_hora_publicacion4 = $('#fecha-hora-publicacion4').text();
var fecha_hora_publicacion5 = $('#fecha-hora-publicacion5').text();
var fecha_hora_publicacion6 = $('#fecha-hora-publicacion6').text();
var fecha_hora_publicacion7 = $('#fecha-hora-publicacion7').text();
var fecha_hora_publicacion8 = $('#fecha-hora-publicacion8').text();
var fecha_hora_publicacion9 = $('#fecha-hora-publicacion9').text();
var fecha_hora_publicacion10 = $('#fecha-hora-publicacion10').text();

// Cada segundo se calcula el tiempo transcurrido
$(document).ready(function() {
   var refreshId = setInterval(actualizarDatos, 1000);
   $.ajaxSetup({ cache: false });
 });

// Función que calcula el tiempo transcurrido entre la fecha de publicación y la fecha actual

function actualizarDatos() {
	// Calcula tiempo transcurrido
	var tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion1);

	// Actualiza el valor del campo con el tiempo transcurrido

	$('#fecha-hora-publicacion1').text(tiempo_transcurrido);

	tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion2);
	$('#fecha-hora-publicacion2').text(tiempo_transcurrido);

	tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion3);
	$('#fecha-hora-publicacion3').text(tiempo_transcurrido);

	tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion4);
	$('#fecha-hora-publicacion4').text(tiempo_transcurrido);

	tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion5);
	$('#fecha-hora-publicacion5').text(tiempo_transcurrido);

	tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion6);
	$('#fecha-hora-publicacion6').text(tiempo_transcurrido);

	tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion7);
	$('#fecha-hora-publicacion7').text(tiempo_transcurrido);

	tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion8);
	$('#fecha-hora-publicacion8').text(tiempo_transcurrido);

	tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion9);
	$('#fecha-hora-publicacion9').text(tiempo_transcurrido);

	tiempo_transcurrido = calcula_diferencia(fecha_hora_publicacion10);
	$('#fecha-hora-publicacion10').text(tiempo_transcurrido);
}

function calcula_diferencia(fecha_hora_inicio)
{
	var fecha_hora_inicio = moment(fecha_hora_inicio, "DDMMYYYYHHmmss");
	var fecha_hora_actual = moment();
	var diferencia_dias = fecha_hora_actual.diff(fecha_hora_inicio, "days");
	var diferencia_horas = fecha_hora_actual.diff(fecha_hora_inicio, "hours");
	var diferencia_minutos = fecha_hora_actual.diff(fecha_hora_inicio, "minutes");
	var diferencia_segundos = fecha_hora_actual.diff(fecha_hora_inicio, "seconds");

	if (diferencia_segundos > 0 && diferencia_segundos < 60) {

		var literal_segundos = "segundo";


		if (diferencia_segundos > 1) {
			literal_segundos = "segundos"
		}
		return "Publicado hace " + diferencia_segundos + " " + literal_segundos;

	} else if (diferencia_minutos > 0 && diferencia_minutos < 60) {

		var literal_minutos = "minuto";

		if (diferencia_minutos > 1) {
			literal_minutos = "minutos"
		}

		return "Publicado hace " + diferencia_minutos + " " + literal_minutos;

	} else if (diferencia_horas > 0 && diferencia_horas < 24) {

		var literal_horas = "hora";
		if (diferencia_horas > 1) {
			literal_horas = "horas"
		}

		return "Publicado hace " + diferencia_horas + " " + literal_horas;
	} else if (diferencia_dias > 0 && diferencia_dias < 7) {

		var dia_semana_sp = dias_semana[fecha_hora_inicio.day()];

		return "Publicado el " + dia_semana_sp;
	}
	else {
		return "Publicado el " + fecha_hora_inicio.format("DD/MM/YYYY") + " a las " + fecha_hora_inicio.format("HH:mm:ss");
	}
}