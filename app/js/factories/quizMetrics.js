(function () {
  'use strict';
  
  angular
    .module('quizApp')
    .factory('QuizMetrics', QuizMetrics);
  
  QuizMetrics.$inject = ['DataService'];
  
  /* @ngInject */
  function QuizMetrics(DataService) {
    var quizObj = {
      quizActive    : false,
      resultsActive : false,
      changeState   : changeState,
      markQuiz      : markQuiz,
      correctAnswers: [],
      numCorrect    : 0
    };
  
    var data = DataService.data;
    
    return quizObj;
    
    ////////////////
    
    function markQuiz() {
      quizObj.correctAnswers = DataService.correctAnswers;
      
      for (var i = 0, len = data.length; i < len; i++) {
        if (data[i].selected == quizObj.correctAnswers[i]) {
          data[i].correct = true;
          quizObj.numCorrect++;
        } else {
          data[i].correct = false;
        }
      }
    }
    
    function changeState(metric, state) {
      if (metric === 'quiz') {
        quizObj.quizActive = state;
      } else if (metric === 'results') {
        quizObj.resultsActive = state;
      } else {
        return false;
      }
    }
  }
})();