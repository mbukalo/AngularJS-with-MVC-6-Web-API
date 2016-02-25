(function () {
    'use strict';

    var heroesService = angular.module('heroesService', ['ngResource']);
    heroesService.factory('Heroes', ['$resource',
        function ($resource) {
            return $resource('/api/heroes', {}, {
                query: { method: 'GET', params: {}, isArray: true }
            });
        }
    ]);
})();