'use strict';

module.film.controller('create', ['$scope', '$http', 'services', '$location', 'film',
    function ($scope, $http, services, $location, film) {
        $scope.message = 'Look! I am an about page.';
        $scope.createFilm = function (film) {
            var results = services.createFilm(film);
        }
    }]);
