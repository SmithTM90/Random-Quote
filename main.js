quoteApp = angular.module('quoteApp', [])

quoteApp.controller('getQuote', ['$scope', '$http', function($scope, $http) {

	$scope.colors = [
      '#40e0d0',
      '#ff7373',
      '#ffa500',
      '#800080',
      '#003366',
      '#666666',
      '#800000',
      '#088da5',
      '#660066',
      '#66cdaa',
      '#daa520',
      '#0e2f44',
      '#3399ff',
      '#cc0000',
      '#8a2be2'
    ];

	$scope.Populate = function () {

		var num = Math.floor(Math.random() * 15);
      
    $scope.color = $scope.colors[num];

		$http.get('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
		.then(function success(response) {

			$scope.quote = response.data 
			$scope.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + $scope.quote.quoteText + '" ' + $scope.quote.quoteAuthor);
  
		
		}, function error(response) {
			console.log(response);
		})
	}	

	// $scope.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + $scope.quote.quoteText + '" ' + $scope.quote.quoteAuthor);

	$scope.Populate();
}])