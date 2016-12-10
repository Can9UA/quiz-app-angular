(function () {
  'use strict';
  
  angular
    .module('quizApp')
    .controller('ResultsCtrl', ResultsCtrl);
  
  ResultsCtrl.$inject = ['QuizMetrics'];
  
  /* @ngInject */
  function ResultsCtrl(QuizMetrics) {
    var vm = this;
    
    vm.quizMetrics = QuizMetrics;
    
    ////////////////
    
  }
})();