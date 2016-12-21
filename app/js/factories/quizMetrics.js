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
  
    var questions = DataService.questions;
    
    return quizObj;
    
    ////////////////
    
    function markQuiz() {
      quizObj.correctAnswers = DataService.correctAnswers;
      
      for (var i = 0, len = questions.length; i < len; i++) {
        if (questions[i].selected == quizObj.correctAnswers[i]) {
          questions[i].correct = true;
          quizObj.numCorrect++;
        } else {
          questions[i].correct = false;
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