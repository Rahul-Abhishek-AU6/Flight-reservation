/**
*	Defines booking module
*
*	@author Rahul Abhishek
*/
define([
	'angular',
	'manage/airports/main',
	'manage/flights/main',
	'manage/navigation/main'
], function( angular ){
	var module = angular.module('BookFlight.manage', [
		'BookFlight.manage.airports',
		'BookFlight.manage.flights',
		'BookFlight.manage.navigation'
	]);

	return module;
});