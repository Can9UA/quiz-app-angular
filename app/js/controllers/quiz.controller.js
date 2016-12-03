(function () {
  'use strict';
  
  angular
    .module('quizApp')
    .controller('QuizCtrl', QuizCtrl);
  
  QuizCtrl.$inject = ['QuizMetrics'];
  
  /* @ngInject */
  function QuizCtrl(QuizMetrics) {
    var vm   = this;
    
    vm.quizMetircs = QuizMetrics;
    
    ////////////////
    
  }
})();