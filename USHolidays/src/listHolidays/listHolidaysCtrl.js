angular
	.module('usHoliday')
	.controller('ListController', function (usHolidaysData) {
		var vm = this;

		vm.holidayList = usHolidaysData;
	})