'use strict';
angular
	.module('usHoliday', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('usholidays');
		$stateProvider
			.state('usHolidaysParent', {
				url: '/src/usholidays',
				templateUrl: 'src/usHolidaysParent/usHolidaysParent.html',
				controller: 'UsHolidaysParentController',
				controllerAs: 'usHolidaysParentCtrl',
				resolve: {
					usHolidaysData: function ($http) {
						// This service call should be part of Angular singleton service layer
						// But for now keeping in the controller, which is not recommended.
						// As Purpose of controller is to only supply the model to the view.
						return $http({
							url: 'https://holidayapi.com/v1/holidays', // this url can be from CONSTANT file
							method: 'get',
							params: { 
								key: 'd9f13e79-b0ba-4d98-b15d-e29a6c94794f',
								country: 'US',
								year: '2017'
							}
						}).then(function (response) {
							return response.data.holidays;
							// here is the handler for success response.
							//Keeping simple not implementing another then clause for
							// error handling process.
						})
					}
				},
				abstract: true
			})
			.state('usHolidaysParent.list', {
				url: '/',
				templateUrl: 'src/listHolidays/listHolidays.html',
				controller: 'ListController',
				controllerAs: 'listCtrl'
			})
			.state('usHolidaysParent.holidayDetails', {
				url: '/details/:name',
				templateUrl: 'src/holidayDetails/holidayDetails.html',
				controller: 'HolidayDetailsController',
				controllerAs: 'holidayDetailsCtrl'
			})
			$locationProvider.html5Mode(true);
	})