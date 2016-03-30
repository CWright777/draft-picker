angular.module('itemsCtrl', []).controller('itemsController', function($scope,User,$location,Item){
  Item.index(function(items){
    $scope.items = items;
  })
  $scope.addItem = function(){
    Item.create($scope.newItem, function(items){
      $scope.items = items;
      $scope.newItem = {};
    })
  }
})
