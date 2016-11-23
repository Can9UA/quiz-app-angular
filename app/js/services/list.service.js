(function () {
  'use strict';
  
  angular.module('quizApp')
    .factory('ListService', ListService);
  
  ListService.$inject = ['$http'];
  
  /* @ngInject */
  function ListService($http) {
    return {
      async: function() {
        return $http.get('./server-data/information.json');
      }
    };
  }
})();