angular.module('gulpPhonecatApp', ['ngRoute', 'phonecatControllers'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'app/views/phone-list.html',
        controller: 'PhoneListController'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'app/views/phone-detail.html',
        controller: 'PhoneDetailController'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
