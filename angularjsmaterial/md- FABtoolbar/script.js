(function() {
    'use strict';
  
    angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', function($scope) {
        $scope.isOpen = false;
  
        $scope.demo = {
          isOpen: false,
          count: 0,
          selectedDirection: 'left'
        };
      });
  })();