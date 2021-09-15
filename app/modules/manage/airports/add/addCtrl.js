/**
*	Controller for airports.add module
*
*	@author Rahul Abhishek
*/
define([
	'manage/airports/module',
	'angular',
	'services'
], function( module, angular ){
	module.controller('airports.addCtrl', [
		'$scope',
		'core.Airports',
		'core.Interface',
		'$log',
		function( $scope, Airports, Interface, $log ){
			$log.debug( "manage.airports.addCtrl" );

			// Template for this controller
			$scope.view = 'modules/manage/airports/add/add.html';

			// keeps the list of airports
			$scope.airports = Interface.airports = Interface.airports || Airports.query();

			// Add new airport
			$scope.addAirport = function( airport ){
				if ( airport && airport.code && airport.city ){
					Airports.save( airport, function(){
						Interface.airports.push( angular.copy(airport) );
						airport.code = '';
						airport.city = '';
					});
				}
			};
		}
	]);
});