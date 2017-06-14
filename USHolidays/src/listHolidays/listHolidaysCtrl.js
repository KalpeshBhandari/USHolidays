var app = angular
	.module('USHoliday', [])
	.controller('listController', function ($state) {
		var vm = this;

		// This service call should be part of Angular singleton service layer
		// But for now keeping in the controller, which is not recommended.
		// As Purpose of controller is to only supply the model to the view.
		$http({
			url: 'https://holidayapi.com/v1/holidays', // this url can be from CONSTANT file
			method: 'get',
			params: { 
				key: $stateParams.id,
				country: 'US',
				year: '2017'
			}
		}).then(function (response) {
			vm.holidayList = response.holidays;
			// here is the handler for success response.
			//Keeping simple not implementing another then clause for
			// error handling process.
			
		})
	})