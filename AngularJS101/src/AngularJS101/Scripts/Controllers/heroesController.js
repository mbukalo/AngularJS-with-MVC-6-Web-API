(function () {
    'use strict';

    angular
        .module('heroesApp')
        .controller('heroesController', heroesController);

    heroesController.$inject = ['$scope', 'Heroes']; 

    function heroesController($scope, Heroes) {
        $scope.Heroes = Heroes.query();
    }
})();
