(function () {
  'use strict';
  
  angular
    .module('quizApp')
    .controller('QuizCtrl', QuizCtrl);
  
  QuizCtrl.$inject = ['QuizMetrics', 'DataService'];
  
  /* @ngInject */
  function QuizCtrl(QuizMetrics, DataService) {
    var vm                = this;
    var questionsAnswered = 0;
    var questionsCount    = 0;
    
    vm.quizMetircs       = QuizMetrics;
    vm.dataService       = DataService;
    vm.activeQuestion    = 0;
    vm.questionAnswered  = questionAnswered;
    vm.setActiveQuestion = setActiveQuestion;
    vm.questions         = [];
    vm.selectAnswer      = selectAnswer;
    vm.error             = false;
    vm.finalise          = false;
    vm.finaliseAnswers   = finaliseAnswers;
    
    //DataService.getQuizQuestionsData()
    //  .then(function (response) {
    //    vm.questions   = response.data;
    //    questionsCount = vm.questions.length;
    //  });
    vm.questions   = DataService.questions;
    questionsCount = vm.questions.length;
    
    ////////////////
    function finaliseAnswers() {
      vm.finalise       = false;
      questionsAnswered = 0;
      vm.activeQuestion = 0;
      
      vm.quizMetircs.markQuiz();
      vm.quizMetircs.changeState('quiz', false);
      vm.quizMetircs.changeState('results', true);
    }
    
    function selectAnswer(index) {
      vm.questions[vm.activeQuestion].selected = index;
    }
    
    function setActiveQuestion(index) {
      if (index !== undefined) {
        vm.activeQuestion = index;
      } else {
        var breakOut = false;
        
        while (!breakOut) {
          vm.activeQuestion = vm.activeQuestion < questionsCount - 1 ? ++vm.activeQuestion : 0;
          
          if (vm.questions[vm.activeQuestion].selected === null || vm.activeQuestion >= questionsCount - 1) {
            vm.error = false;
            breakOut = true;
          }
        }
      }
    }
    
    function questionAnswered() {
      if (vm.questions[vm.activeQuestion].selected !== null) {
        questionsAnswered++;
        
        if (questionsAnswered >= questionsCount) {
          
          vm.error    = false;
          vm.finalise = true;
          
          return;
        }
      }
      
      vm.setActiveQuestion();
    }
  }
})();