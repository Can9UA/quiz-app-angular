(function() {
  'use strict';

  angular.module('quizApp')
         .controller('ListCtrl', ListCtrl);

  ListCtrl.$inject = ['ListService'];

  /* @ngInject */
  function ListCtrl(ListService) {
    var vm = this;

    vm.title = 'ListCtrl';
    vm.activeItem = {}
    vm.changeActiveItem = changeActiveItem;
    
    ListService.load()
      .then(function (response) {
        vm.data = response.data;
      });
    
    ////////////////
    
    function changeActiveItem(item) {
      vm.activeItem = item;
    }
  }
})();