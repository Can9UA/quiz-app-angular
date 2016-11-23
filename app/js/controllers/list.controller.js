(function() {
  'use strict';

  angular.module('quizApp')
         .controller('ListCtrl', ListCtrl);

  ListCtrl.$inject = ['ListService'];

  /* @ngInject */
  function ListCtrl(ListService) {
    /* jshint validthis: true */
    var vm = this;

    vm.title = 'ListCtrl';
    
    ListService
      .async()
      .then(function (response) {
        vm.data = response;
      });
    
    ////////////////

  }
})();