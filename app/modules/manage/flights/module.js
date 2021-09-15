/**
*	Defines booking module
*
*	@author Rahul Abhishek
*/
define([
	'angular',
	'core/main'
], function( angular ){
	var module = angular.module('BookFlight.manage.flights', [
		'BookFlight.core'
	]);

	return module;
});