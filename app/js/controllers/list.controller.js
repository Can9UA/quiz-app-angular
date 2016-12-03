(function() {
  'use strict';

  angular.module('quizApp')
         .controller('ListCtrl', ListCtrl);

  ListCtrl.$inject = ['ListService', 'QuizMetrics'];

  /* @ngInject */
  function ListCtrl(ListService, QuizMetrics) {
    var vm = this;

    vm.quizMetircs = QuizMetrics;
    vm.activeItem = {}
    vm.changeActiveItem = changeActiveItem;
    vm.search = '';
    vm.activateQuiz = activateQuiz;
    
    ListService.load()
      .then(function (response) {
        vm.data = response.data;
      });
    
    ////////////////
    
    function changeActiveItem(item) {
      vm.activeItem = item;
    }
    
    function activateQuiz() {
      QuizMetrics.changeState(true);
    }
  }
})();