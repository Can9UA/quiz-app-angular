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
    vm.getAnswerClass = getAnswerClass;
    
    ////////////////
    
    function getAnswerClass(index) {
      if (index === vm.quizMetrics.correctAnswers[vm.activeQuestion]) {
        return "bg-success";
      } else if (index === vm.data.questions[vm.activeQuestion].selected) {
        return "bg-danger";
      }
    }
  }
})();