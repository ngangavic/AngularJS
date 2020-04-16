var phonecatApp = angular.module('phonecatApp', []);//defination of phonecatApp

phonecatApp.controller('PhoneListController', function PhoneListController($scope) {//define PhoneListController on phonecatApp
    $scope.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
    $scope.name = 'world';
  });