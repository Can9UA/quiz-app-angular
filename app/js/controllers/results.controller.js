(function () {
  'use strict';
  
  angular
    .module('quizApp')
    .controller('ResultsCtrl', ResultsCtrl);
  
  ResultsCtrl.$inject = ['QuizMetrics', 'DataService'];
  
  /* @ngInject */
  function ResultsCtrl(QuizMetrics, DataService) {
    var vm = this;
    
    vm.quizMetrics = QuizMetrics;
    vm.data = DataService;
    vm.activeQuestion = 0;
    
    ////////////////
    
  }
})();