
	var app = angular.module('bonusApp', ['jcs-autoValidate']);

	angular.module('jcs-autoValidate').run([
		'defaultErrorMessageResolver',
		function(defaultErrorMessageResolver) {
			// To change the root resource file path

			defaultErrorMessageResolver.setI18nFileRootPath('js/lib');							// fija el path para el set del idioma de los errores
			defaultErrorMessageResolver.setCulture('es-CO');									// español de Colombia

			defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
				errorMessages['edadMinima'] = 'Debe de ser mayor a {0} años de edad.';			// si se tipea un error por debajo de min fijado en el html
				errorMessages['edadMaxima'] = 'Debe de ser menor a {0} años de edad.';
			});
		}
	]);

	app.controller('mainCtrl', ['$scope', function($scope) {

		$scope.formData = {};

		$scope.guardar_datos = function() {
			console.log("Posteando...");
		};

	}]);
