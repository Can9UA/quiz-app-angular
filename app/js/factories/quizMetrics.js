(function () {
  'use strict';
  
  angular
    .module('quizApp')
    .factory('QuizMetrics', QuizMetrics);
  
  /* @ngInject */
  function QuizMetrics() {
    var quizObj = {
      quizActive : false,
      changeState: changeState
    };
    
    return quizObj;
    
    ////////////////
    
    function changeState(state) {
      quizObj.quizActive = state;
    }
  }
})();