(function () {
  'use strict';
  
  angular
    .module('quizApp')
    .controller('QuizCtrl', QuizCtrl);
  
  QuizCtrl.$inject = ['QuizMetrics', 'DataService'];
  
  /* @ngInject */
  function QuizCtrl(QuizMetrics, DataService) {
    var vm = this;
    var questionsAnswered = 0;
    var questionsCount = 0;
    
    vm.quizMetircs = QuizMetrics;
    vm.dataService = DataService;
    vm.activeQuestion = 0;
    vm.questionAnswered = questionAnswered;
    vm.setActiveQuestion = setActiveQuestion;
    vm.questions = [];
    
    DataService.getQuizQuestionsData()
      .then(function (response) {
        vm.questions = response.data;
        questionsCount = vm.questions.length;
      });
    
    ////////////////
    
    function setActiveQuestion() {
      var breakOut = false;
      
      while(!breakOut) {
        vm.activeQuestion = vm.activeQuestion < questionsCount - 1 ? ++vm.activeQuestion : 0;
        
        if (questions[vm.activeQuestion].selected === null) {
          breakOut = true;
        }
      }
      
      vm.activeQuestion++;
    }
    
    function questionAnswered() {
      if (vm.questions[vm.activeQuestion] !== null) {
        questionsAnswered++;
  
        if (questionsAnswered >= questionsCount) {
          
        }
      }
      
      vm.setActiveQuestion();
    }
  }
})();