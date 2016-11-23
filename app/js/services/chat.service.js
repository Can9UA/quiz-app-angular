(function() {
  'use strict';

  angular.module('quizApp')
         .factory('ChatService', ChatService);

  // ChatService.$inject = [''];

  /* @ngInject */
  function ChatService() {
    var service = {
      getMessages: getMessages,
      sendMessage: sendMessage
    };

    return service;

    ////////////////

    function getMessages() {
      return 'hellow';
    }

    function sendMessage(message) {
      console.log('sended:' + message);
    }
  }
})();