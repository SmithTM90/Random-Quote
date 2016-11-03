quoteApp = angular.module('quoteApp', [])

quoteApp.controller('getQuote', ['$scope', '$http', function($scope, $http) {


	$scope.Populate = function () {
		$http.get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
		.then(function success(response) {
			$scope.quote = response.data
			console.log(response.data);
		}, function error(response) {
			console.log(response);
		})
	}	
	$scope.Populate();
}])