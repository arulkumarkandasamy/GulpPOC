var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListController', PhoneListController);

/** @ngInject */
function PhoneListController($scope, $http){
	 $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
}

phonecatControllers.controller('PhoneDetailController', PhoneDetailController);

/** @ngInject */
function PhoneDetailController($scope, $routeParams,$http){
	 
	 $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
};

    
