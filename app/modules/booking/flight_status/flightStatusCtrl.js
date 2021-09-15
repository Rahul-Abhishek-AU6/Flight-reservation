/**
*	Displays Flights status
*
*	@author Rahul Abhishek
*/

define([
	'booking/module',
	'services',
	'providers'
], function( module ){
	module.controller('booking.flightStatus', [
		'$scope',
		'$log',
		'core.Flights',
		'core.AirportName',
		function( $scope, $log, Flights, AirportName ){
			$log.debug('booking.FlightStatus');

			var i, delay;

			$scope.flights = Flights.query(function(){
				// Mock flights status, as no service is available
				for ( i = 0; i < $scope.flights.length; i++ ){
					delay = Math.floor(Math.random() * 10) - 4;
					$scope.flights[i]['status'] = delay < 0 ? "Delayed" : "Fine";
					$scope.flights[i]['delay'] = delay < 0 ? (-1 * delay) : 0;
				}
			});

			$scope.view = "modules/booking/flight_status/flightStatus.html"
			$scope.AirportName = AirportName;
		}
	]);
})