'use strict';

/**
 * @ngdoc directive
 * @name toDoListApp.directive:newListItem
 * @description
 * # newListItem
 */
angular.module('toDoListApp')
  .directive('newListItem', function () {
    return {
      template: '<div>{{testItem}}</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the newListItem directive');

        scope.testItem = 'teeeeeestas';
      }
    };
  });
