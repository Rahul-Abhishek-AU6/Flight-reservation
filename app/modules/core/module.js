/**
*	Defines core module
*
*	@author Rahul Abhishek
*/
define([
	'angular',
	'angular-resource'
], function( angular ){
	var module = angular.module('BookFlight.core', ['ngResource']);

	return module;
});