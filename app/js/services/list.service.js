(function () {
  'use strict';
  
  angular.module('quizApp')
    .factory('ListService', ListService);
  
  ListService.$inject = ['$http'];
  
  /* @ngInject */
  function ListService($http) {
    var promise;
    var service = {
      async: function() {
        if ( !promise ) {
          promise = $http.get('./server-data/information.json')
            .then(function (response) {
              return response;
            });
        }
        
        return promise;
      }
    };
    
    ////////////////
    return service;
  }
})();