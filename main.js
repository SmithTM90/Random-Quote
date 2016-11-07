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

		$http({
			method: 'GET',
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
			headers: {
				'X-mashape-key': 'gj7iyunSAWmshyVuvHRdDmkeZG8sp1CPgJfjsnzplRGGBiwvYN'
			}
		})
		.then(function success(response) {
			console.log(response.data);
			$scope.quote = response.data 
			$scope.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + $scope.quote.quoteText + '" ' + $scope.quote.quoteAuthor);
  
		
		}, function error(response) {
			console.log(response);
		})
	}	

	$scope.Populate();
}])