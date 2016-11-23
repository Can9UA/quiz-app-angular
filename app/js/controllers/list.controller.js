(function() {
  'use strict';

  angular.module('quizApp')
         .controller('listCtrl', listCtrl);

  listCtrl.$inject = ['ListService'];

  /* @ngInject */
  function listCtrl(ListService) {
    /* jshint validthis: true */
    var vm = this;

    vm.title = 'listCtrl';
    vm.data = ListService.getInformation();

    ////////////////

    function success() {
    }

  }
})();