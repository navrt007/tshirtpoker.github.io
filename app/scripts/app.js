'use strict';


angular.module('firePokerApp', ['firebase', 'ngCookies'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/games/index.html',
        controller: 'MainCtrl'
      })
      .when('/games/new/:gid', {
        templateUrl: 'views/games/new.html',
        controller: 'MainCtrl'
      })
      .when('/games/:gid', {
        templateUrl: 'views/games/view.html',
        controller: 'MainCtrl'
      })
      .when('/games/join/:gid', {
        templateUrl: 'views/games/join.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
    
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(port);
