(function () {
    'use strict';
    angular
      .module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('ChipsValidationCtrl', ValidationCtrl);
  
    function ValidationCtrl ($log) {
      this.selectedFruit = [];
      this.selectedVegetables = [];
      this.onSubmit = function(form) {
        $log.log({fruits: form.fruits.$modelValue, vegetables: form.vegetables.$modelValue});
      };
    }
  })();