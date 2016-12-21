(function () {
  'use strict';
  
  angular
    .module('quizApp')
    .controller('ResultsCtrl', ResultsCtrl);
  
  ResultsCtrl.$inject = ['QuizMetrics', 'DataService'];
  
  /* @ngInject */
  function ResultsCtrl(QuizMetrics, DataService) {
    var vm = this;
    
    vm.quizMetrics       = QuizMetrics;
    vm.activeQuestion    = 0;
    vm.getAnswerClass    = getAnswerClass;
    vm.setActiveQuestion = setActiveQuestion;
    vm.calculatePerc     = calculatePerc;
    vm.reset             = reset;
    
    vm.dataService = DataService;
    vm.info        = vm.dataService.info;
    vm.questions   = vm.dataService.questions;
    
    ////////////////
    
    function reset() {
      vm.quizMetrics.changeState('results', false);
      vm.quizMetrics.numCorrect = 0;
      
      for (var i = 0, len = vm.questions.length; i < len; i++) {
        var data = vm.questions[i];
        
        data.selected = null;
        data.correct  = null;
      }
    }
    
    function calculatePerc() {
      return (vm.quizMetrics.numCorrect / vm.questions.length) * 100;
    }
    
    function setActiveQuestion(index) {
      vm.activeQuestion = index;
    }
    
    function getAnswerClass(index) {
      if (index === vm.quizMetrics.correctAnswers[vm.activeQuestion]) {
        return "bg-success";
      } else if (index === vm.questions[vm.activeQuestion].selected) {
        return "bg-danger";
      }
    }
  }
})();