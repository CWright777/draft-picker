angular.module('wishesCtrl', []).controller('wishesController', function($scope,User,$location,Wish,Item){
  Item.index(function(items){
    $scope.items = items;
  })
  //$scope.addItem = function(){
    //Item.create($scope.newItem, function(items){
      //$scope.items = items;
      //$scope.newItem = {};
    //})
  //}
})
