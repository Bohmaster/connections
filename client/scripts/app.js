angular
	.module('app', [
		'lbServices',
		'module.core',
		'ui.router',
		'ui.bootstrap',
		'ngResource'
	])
	.run(function($rootScope) {
		$rootScope.app = {};
		$rootScope.app.title = "Connections CMS";
	});
