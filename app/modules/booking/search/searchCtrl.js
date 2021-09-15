/**
*	Controller for search module
*
*	@author Rahul Abhishek
*/
define([
	'booking/module',
	'services'
], function( module ){
	module.controller('booking.searchCtrl', [
		'$scope',
		'core.Airports', 
		'$log',
		'$location',
		function ( $scope, Airports, $log, $location ){
			$log.debug( "booking.searchCtrl");
			
			// Template for this controller
			$scope.view = 'modules/booking/search/search.html';

			// Airport data
			$scope.airports = Airports.query();

			// Used to toggle suggestion list
			$scope.show  = {};

			// Captures serach-query
			$scope.search = {};

			var url = $location.path();

			// populate origin / destination fields, if applicable
			if ( url.indexOf('/booking/') > -1 ){
				url = url.replace('/booking/', '').split('/');
				$scope.search.origin = url[0] || '';
				$scope.search.destination = url[1] || '';
			}

			// If page loads with prepopulated field, disable suggestion list
			if ( $scope.search.origin && $scope.search.destination ){
				$scope.show.origin = $scope.show.destination = false;
			}else{
				$scope.show.origin = $scope.show.destination = true;
			}

			// Updates input box with selected value from popup
			$scope.selectPlace = function( field, airportCode ){
				$scope.search[ field ] = airportCode;

				// Hide the suggestion List
				$scope.show[ field ] = false;
			};
		}
	]);
});