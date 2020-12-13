(function() {
    'use strict';
  
    var app=angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache','ngRoute','ngResource'])
        .controller('AppCtrl', AppCtrl);
  
    function AppCtrl($scope) {
      $scope.currentNavItem = 'page1';
  
      $scope.goto = function(page) {
        $scope.status = "Goto " + page;
      };
    }
  })();