/**
*	Controller for booking.cancel module
*
*	@author Rahul Abhishek
*/
define([
	'booking/module',
	'services',
	'providers'
], function( module ){
	module.controller('booking.cancelCtrl', [
		'$scope',
		'core.Bookings',
		'core.Interface',
		'core.AirportName',
		'$log',
		function( $scope, Bookings, Interface, AirportName, $log ){
			$log.debug( "booking.cancelCtrl" );

			// Template for this controller
			$scope.view = 'modules/booking/cancel/cancel.html';

			// Shared data - for inter controller comm
			$scope.bookings = Interface.bookings = Interface.bookings || Bookings.query();

			// Common methods
			$scope.AirportName = AirportName;

			// Cancels flight
			$scope.cancelFlight = function( flight ){		
				Bookings.remove( { bookingId: flight.number }, function(){
					var i;

					for ( i = 0; i < $scope.bookings.length; i++ ){
						if (  $scope.bookings[ i ][ "number" ] === flight.number ){
							$scope.bookings.splice( i, 1 );
							break;
						}
					}
				});
			};
		}
	]);
}); 