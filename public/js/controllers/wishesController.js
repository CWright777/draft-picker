angular.module('wishesCtrl', []).controller('wishesController', function($scope,User,$location,Wish,Item,User){
  $scope.currentUser = User.currentUser;
  Item.index(function(items){
    $scope.items = items;
  });
  //$scope.addWish = function(){
    //Wish.create($scope.newWish, function(wishes){
      //$scope.wishes = wishes;
      //$scope.newWishes = {};
    //})
  //};
})
