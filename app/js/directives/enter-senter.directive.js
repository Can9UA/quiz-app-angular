(function() {
'use strict';

angular.module('quizApp')
       .directive('enterSender', enterSender);

function enterSender() {
  return function (scope, element, attrs) {
    element.bind('keydown keypress', function (e) {

      if (e.which === 13) {
        scope.$apply(function(){
          scope.$eval(attrs.enterSender);
        });

        e.preventDefault();
      }
    });
  };
}

})();