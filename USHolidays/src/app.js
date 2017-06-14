angular
	.module('USHoliday', ['ui-router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/list');
		$stateProvider
			.state('list', {
				url: '/list',
				templateUrl: 'listHolidays/list.html',
				controller: 'listController',
				controllerAs: 'listCtrl'
			})
			.state('holidayDetails', {
				url: '/details',
				templateUrl: 'holidayDetails/holidayDetails.html',
				controller: 'holidayDetailsController',
				controllerAs: 'holidayDetailsCtrl'
			})
	})