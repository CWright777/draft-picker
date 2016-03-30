angular.module('userService', []).service('User', ['$http', function($http){
  this.create = function(newUser,callback){
    $http.post('/users', newUser).success(function(userId){
      callback(userId)
    })
  }
}])

//angular.module('userService', []).factory('User', ['$http', function($http){
  //var factory = {}
  //factory.currentUser
  //factory.create = function(newUser,callback){
    //$http.post('/users', newUser).success(function(userId){
      //factory.currentUser = newUser.id
      //callback(userId)
    //})
  //}
  //return factory
//}])
