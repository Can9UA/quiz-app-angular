(function () {
  'use strict';
  
  angular.module('quizApp')
    .service('ListService', ListService);
  
  ListService.$inject = ['$http'];
  
  /* @ngInject */
  function ListService($http) {
    this.getInformation = getInformation;
    
    ////////////////
    
    function getInformation() {
      $http.get('server-data/information.json');
    }
  }
})();