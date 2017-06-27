'use strict';

module.film.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/film/list', {
        templateUrl: 'modules/film/views/list.html',
        controller: 'list'
    });

    $routeProvider.when('/film/create', {
        templateUrl: 'modules/film/views/create.html',
        controller: 'create',
        resolve: {
            film: function (services, $route) {
                return services.getFilms();
            }
        }
    });

    $routeProvider.when('/film/update/:filmId', {
        templateUrl: 'modules/film/views/update.html',
        controller: 'update',
        resolve: {
            film: function (services, $route) {
                var filmId = $route.current.params.filmId;
                return services.getFilm(filmId);
            }
        }
    });

    $routeProvider.when('/film/delete/:filmId', {
        templateUrl: 'modules/film/views/list.html',
        controller: 'delete',
    });

    $routeProvider.otherwise({
        redirectTo: '/film/list'
    });

}]);
