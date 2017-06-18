angular
	.module('usHoliday')
	.controller('HolidayDetailsController', function ($stateParams, usHolidaysData) {
		var vm = this;

		//using lodash method to filter record associated with name attribute of $stateParams
		vm.holidayDetail = _.filter(usHolidaysData, function(obj) { 
			return obj.name == $stateParams.name;
		});

	})