angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'views/login.html',
    controller: 'usersController'
  })
  .when('/items', {
    templateUrl:'views/items.html',
    controller: 'itemsController'
  })
  .when('/wishes', {
    templateUrl:'views/wishes.html',
    controller: 'wishesController'
  })

}]);
