/**
*	Controller for flights.remove module
*
*	@author Rahul Abhishek
*/
define([
	'manage/flights/module',
	'services'
], function( module ){
	module.controller('flights.removeCtrl', [
		'$scope',
		'core.Flights',
		'core.Interface',
		'$log',
		function( $scope, Flights, Interface, $log ){
			$log.debug( "manage.flights.remove.removeCtrl" );

			// Template for this controller
			$scope.view = 'modules/manage/flights/remove/remove.html';

			// keeps the list of flights
			$scope.flights = Interface.flights = Interface.flights || Flights.query();

			// Removes flight
			$scope.removeFlight = function( flight ){
				if ( flight && flight.number && flight.origin && flight.destination ){
					Flights.remove( { 
						number: flight.number
					}, function(){
						var i;

						for ( i = 0; i < $scope.flights.length; i++ ){
							if (  $scope.flights[ i ][ "number" ] === flight.number ){
								$scope.flights.splice( i, 1 );
								break;
							}
						}
					});
				}
			};
		}
	]);
});