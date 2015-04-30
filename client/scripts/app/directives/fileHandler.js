angular
	.module('module.core')
	.directive('fileInput', function($parse) {
		return {
			restrict: 'A',
			link: function(scope, tElem, tAttrs) {
				tElem.bind('change', function() {
					$parse(attrs.fileInput)
			            .assign(scope, elm[0].files);
			            scope.$apply();
				});

				console.log("sabe");
			}
		}
	});