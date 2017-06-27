'use strict';

module.film.controller('list', ['$scope', '$http', 'services',
    function ($scope, $http, services) {
        $scope.message = 'Everyone come and see how good I look!';
        services.getFilms().then(function (data) {
            $scope.films = data.data;
        });
        $scope.deleteFilm = function (filmID) {
            if (confirm("Are you sure to delete film number: " + filmID) == true && filmID > 0) {
                services.deleteFilm(filmID);
                $route.reload();
            }
        };
    }]);
