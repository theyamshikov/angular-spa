'use strict';

module.site.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/site/index', {
        templateUrl: 'modules/site/views/index.html',
        controller: 'index'
    });

    $routeProvider.when('/site/about', {
        templateUrl: 'modules/site/views/about.html',
        controller: 'about'
    });

    $routeProvider.when('/site/contact', {
        templateUrl: 'modules/site/views/contact.html',
        controller: 'contact'
    });

    $routeProvider.otherwise({
        redirectTo: '/site/index'
    });

}]);
