angular
	.module('module.core')
	.controller('fileController', function($scope, Profesionales, Container) {

		/**
		* Profesionales API wrapper
		**/

		var data = {
			nombre: $scope.profesional.nombre,
			tituloEsp: $scope.profesional.tituloEsp,
			descripcionEsp: $scope.profesional.descripcionEsp,
			foto: $scope.profesional.foto
		};

		$scope.agregar = function() {
			console.log(data);
		}

		/**
		* Files methods
		**/

        $scope.upload = function() {
            var fd = new FormData();
            angular.forEach($scope.files, function(file) {
              fd.append('file', file);
            });
            $http.post('/api/containers/images/upload',
              fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
              }
            ).success(function(d){
                console.log(d);
                console.log($scope.files);
              })
              .error(function(e) {
                console.log(e);
              })
          };
	});