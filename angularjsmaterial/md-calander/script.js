var app=angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache','ngRoute','ngResource']).controller('AppCtrl', function() {
    this.startDate = new Date();
    this.endDate = new Date();
    this.endDate.setDate(this.endDate.getDate() + 5);
  });