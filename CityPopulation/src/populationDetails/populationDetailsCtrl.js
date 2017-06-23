var app = angular
	.module('CityPopulation', [])
	.controller('populationDetailsController', function ($state, $http, $stateParams, cityPopulationData) {
		var vm = this;


		//using lodash method to filter record associated with name attribute of $stateParams
		vm.populationDetail = _.filter(cityPopulationData, function(obj) { 
			return obj.zip == $stateParams.zip;
		});

		vm.SaveCityPopulation = function (zip) {
			// This service call should be part of Angular singleton service layer
			// But for now keeping in the controller, which is not recommended.
			// As Purpose of controller is to only supply the model to the view.
			
			$http({
				url: 'https://citypopulation.com/v1/city/save', // this url can be from CONSTANT file and part of webapi action method
				method: 'POST',
				params: { 
					zip: zip,
					pop: vm.populationDetail.pop,
					state: vm.populationDetail.state
				}
			}).then(function (response) {
				return response.data.holidays;
				// here is the handler for success response.
				//Keeping simple not implementing another then clause for
				// error handling process.
			})
		};

		vm.redirectToList = function () {
			$state.go('cityPopulationParent.list');
		};
	})