angular.module('itemService', []).service('Item', ['$http', function($http){
  this.create = function(newItem,callback){
    $http.post('/items', newItem).success(function(items){
      callback(items);
    })
  }
  this.index = function(callback){
    $http.get('/items').success(function(items){
      callback(items);
    })
  }
}])
