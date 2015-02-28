var newsApp = angular.module('newsApp', ['ui.router']);

  beatsApp.config(function($stateProvider) {
    $stateProvider.state('beats', {
    url: '',
    templateUrl: 'partials/beat.html',
    controller: 'BeatsCtrl'
  });
});
