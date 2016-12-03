(function () {
  'use strict';
  
  angular.module('quizApp')
    .factory('DataService', DataService);
  
  DataService.$inject = ['$http'];
  
  /* @ngInject */
  function DataService($http) {
    var dataObj = {
      getQuizItemsData: getQuizItemsData,
      getQuizQuestionsData: getQuizQuestionsData
    }
    
    return dataObj;
    
    ////////////////
    
    function getQuizItemsData() {
      return $http.get('./server-data/information.json');
    }
    
    function getQuizQuestionsData() {
      return $http.get('./server-data/questions.json');
    }
  }
})();