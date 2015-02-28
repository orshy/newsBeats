var beatsApp = angular.module('beatsApp', ['ui.router']);

  beatsApp.config(function($stateProvider) {
    $stateProvider.state('beats', {
    url: '',
    templateUrl: 'partials/beat.html',
    controller: 'BeatsCtrl'
  });
});
