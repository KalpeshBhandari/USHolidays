var app = angular
	.module('USHoliday', [])
	.controller('holidayDetailsController', function ($http, $stateParams) {
		var vm = this;

		vm.holidayDetail = {
			name: $stateParams.name,
			date: $stateParam.date,
			observed: $stateParam.observed,
			public: $stateParam.public
		};
	})