angular
	.module('usHoliday')
	.controller('UsHolidaysParentController', function (usHolidaysData) {
		var vm = this;

		vm.numberOfHolidays = usHolidaysData.length;
	})