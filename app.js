var FirstApp = angular.module('FirstApp',['ngRoute']);

FirstApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/viewfriends',{
    templateUrl:"views/viewfriends.html",
    controller:"viewfriends"
  })
  .when('/findfriends',{
    templateUrl:"views/findfriends.html",
    controller:"findfriendscontroller"
  })
  .when('/update',{
    templateUrl:"views/update.html",
    controller:"updatecontroller"
  })
  .otherwise({
    redirectTo:"views/viewfriends.html"
  })
}]);
