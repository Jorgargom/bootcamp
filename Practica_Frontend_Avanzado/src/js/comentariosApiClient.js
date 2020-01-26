var $ = require('jquery');

module.exports = {

	save: function(comentario, successCallback, errorCallback) {


		$.ajax({
			url: "http://localhost:3001/comments", 
			method: "post",
			data: comentario,
			success: successCallback,
			error: errorCallback
		});
	},

	load: function(successCallback, errorCallback) {
		$.ajax({
			cache: true,
			method: "get",
			url: "http://localhost:3001/comments",
			success: successCallback,
			error: errorCallback
		});
	}
};