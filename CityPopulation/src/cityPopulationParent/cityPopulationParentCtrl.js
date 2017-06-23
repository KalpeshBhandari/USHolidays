angular
	.module('CityPopulation')
	.controller('CityPopulationParentController', function (cityPopulationData) {
		var vm = this;

		vm.numberOfCities = cityPopulationData.length;
	})