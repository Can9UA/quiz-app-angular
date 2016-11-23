(function() {
  'use strict';

  angular.module('quizApp')
         .controller('ListCtrl', ListCtrl);

  ListCtrl.$inject = ['ListService'];

  /* @ngInject */
  function ListCtrl(ListService) {
    var vm = this;

    vm.title = 'ListCtrl';
    
    ListService
      .load()
      .then(function (response) {
        vm.data = response.data;
      });
    
    ////////////////

  }
})();