import angular from 'angular';

angular.module('app')
    .constant('config', {})
    .run(['$rootScope', function ($rootScope) {
        console.log('w00t');
    }]);
