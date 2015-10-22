angular.module('Controller', [])
.controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {

	$rootScope.title = "Hello"
	$scope.label = "Name";
	$scope.list = ['Michael', 'Vic', 'Hand'];

	this.input = function (example) {
		$scope.list.push(example);
	}

}])
.controller('NewController', ['$scope', function ($scope) {

	$scope.label = "Number";


}])
