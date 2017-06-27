'use strict';

module.film.controller('update', ['$scope', '$http', '$routeParams', 'services', '$location', 'film',
    function ($scope, $http, $routeParams, services, $location, film) {
        $scope.message = 'Contact us! JK. This is just a demo.';
        var original = film.data;
        $scope.film = angular.copy(original);
        $scope.isClean = function () {
            return angular.equals(original, $scope.film);
        };
        $scope.updateFilm = function (film) {
            var results = services.updateFilm(film);
        }
    }]);
