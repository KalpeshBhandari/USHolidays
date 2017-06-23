angular
	.module('CityPopulation', ['ui-router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/list');
		$stateProvider
			.state('cityPopulationParent', {
				url: '/src/cityPopulation',
				templateUrl: 'src/cityPopulationParent/cityPopulationParent.html',
				controller: 'CityPopulationParentController',
				controllerAs: 'cityPopulationParentCtrl',
				resolve: {
					cityPopulationData: function ($http) {
						// This service call should be part of Angular singleton service layer
						// But for now keeping here, which is not recommended.
						// As Purpose of controller is to only supply the model to the view.
						return $http({
							url: 'https://citypopulation.com/v1/citylist', // this url can be from CONSTANT file and part of webapi action method
							method: 'get'
						}).then(function (response) {
							return response.cities;
							// here is the handler for success response.
							//Keeping simple not implementing another then clause for
							// error handling process.
						})
					}
				},
				abstract: true
			})
			.state('cityPopulationParent.list', {
				url: '/list',
				templateUrl: 'listCityPopulation/listCityPopulationlist.html',
				controller: 'listController',
				controllerAs: 'listCtrl'
			})
			.state('cityPopulationParent.cityDetails', {
				url: '/details',
				templateUrl: 'populationDetails/holidayDetails.html',
				controller: 'populationDetailsController',
				controllerAs: 'populationDetailsCtrl'
			})
	})