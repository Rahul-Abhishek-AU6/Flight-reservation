/**
*	App config
*
*	@author Rahul Abhishek
*/
require.config({
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-resource': ['angular'],
		'angular-ui-router': ['angular'],
		'oclazyload': ['angular']
	},
	paths: {
		'angular': '../vendor/angular',
		'angular-resource': '../vendor/angular-resource',
		'angular-ui-router': '../vendor/angular-ui-router',
		'oclazyload': '../vendor/oclazyload',
		'services': 'core/services',
		'directives': 'core/directives',
		'providers': 'core/providers',
		'filters': 'core/filters'
	},
	packages: ['services', 'directives', 'providers', 'filters'],
	modules: [
		{
			name: 'main'
		},
		{
			name: 'booking/main',
			exclude: ['services', 'directives']
		},
		{
			name: 'manage/main',
			exclude: ['services', 'directives']
		}
	],
	deps: [
		'angular',
		'app',
		'states'
	],
	callback: function( angular ){
		angular.bootstrap( document, ['BookFlight']);
	}
});