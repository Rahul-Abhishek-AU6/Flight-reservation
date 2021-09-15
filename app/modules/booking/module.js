/**
*	Defines booking module
*
*	@author Rahul Abhishek
*/
define([
	'angular',
	'core/module'
], function( angular ){
	var module = angular.module('BookFlight.booking', [
		'BookFlight.core'
	]);

	return module;
});