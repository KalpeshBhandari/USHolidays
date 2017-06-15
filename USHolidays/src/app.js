'use strict';
angular
	.module('usHoliday', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('list');
		$stateProvider
			.state('list', {
				url: '/src/list',
				templateUrl: 'src/listHolidays/listHolidays.html',
				controller: 'ListController',
				controllerAs: 'listCtrl'
			})
			.state('holidayDetails', {
				url: '/src/details',
				templateUrl: 'src/holidayDetails/holidayDetails.html',
				controller: 'HolidayDetailsController',
				controllerAs: 'holidayDetailsCtrl'
			})
			$locationProvider.html5Mode(true);
	})