angular.module('wishService', []).service('Wish', ['$http', function($http){
  this.create = function(newWish,callback){
    $http.post('/wishes', newWish).success(function(wishes){
      callback(wishes);
    })
  }
  //this.index = function(callback){
    //$http.get('/items').success(function(items){
      //callback(items);
    //})
  //}
}])
