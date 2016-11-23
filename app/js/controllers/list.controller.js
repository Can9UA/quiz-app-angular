(function() {
  'use strict';

  angular.module('quizApp')
         .controller('listCtrl', listCtrl);

  //listCtrl.$inject = ['ChatService'];

  /* @ngInject */
  function listCtrl() {
    /* jshint validthis: true */
    var vm = this;

    vm.title = 'listCtrl';
    vm.scrollBottom = scrollBottom;

    // vm.messages = ChatService.getMessages();

    ////////////////

    function scrollBottom() {
    }

  }
})();