var app = angular.module('piglatinApp',[]);
app.controller('piglatinController', function($scope) {
	$scope.input = "";
	$scope.result = "";
	$scope.piglatin = function(){
		var words = $scope.input.split(" ");
		var result = "";
		for (var i = 0; i < words.length; i++) {
			if (/^[aeiou]/i.test(words[i])) {
				result += words[i] + 'yay ';
			} else {
				result += words[i].replace(/(\w+?)([aeiou]\w*)/i, '$2$1ay ');
			}
		}
		console.log(result.substring(0,result.length));
		$scope.result = result.substring(0,result.length);
	};  
});