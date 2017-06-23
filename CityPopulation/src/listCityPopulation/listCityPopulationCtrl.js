var app = angular
	.module('CityPopulation', [])
	.controller('listController', function (cityPopulationData)  {
		var vm = this;

		vm.cityPopulationList = cityPopulationData;
	})