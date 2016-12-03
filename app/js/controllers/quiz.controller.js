(function () {
  'use strict';
  
  angular
    .module('quizApp')
    .controller('QuizCtrl', QuizCtrl);
  
  QuizCtrl.$inject = ['QuizMetrics', 'DataService'];
  
  /* @ngInject */
  function QuizCtrl(QuizMetrics, DataService) {
    var vm = this;
    
    vm.quizMetircs = QuizMetrics;
    
    DataService.getQuizQuestionsData()
      .then(function (response) {
        vm.questions = response.data;
      });
    ////////////////
    
  }
})();