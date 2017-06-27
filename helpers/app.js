'use strict';

var app = {
    getAllModules: function () {
        var modules = [];
        config.modules.forEach(function (name) {
            modules.push(config.id + '.' + name);
        });
        modules.unshift('ngRoute');
        return modules;
    },

    loadModules: function () {
        window['module'] = {};
        config.modules.forEach(function (name) {
            window['module'][name] = window[config.id + '_' + name] = angular.module(config.id + '.' + name, ['ngRoute']);
            include('modules/' + name + '/module.js');
        });
    },

    getAppId: function () {
        return document.getElementsByTagName('html')[0].getAttribute('ng-app');
    },

    setHeader: function () {
        addTag('base', {href: 'http://' + location.hostname + '/'});
        addTag('meta', {charset: 'UTF-8'});
    },

    setDefaultRoute: function () {
        window[config.id].config(['$routeProvider', function ($routeProvider) {
            // Маршрут по-умолчанию
            $routeProvider.otherwise({redirectTo: '/site/index'});
        }]);
    },

    setServiceBase: function () {
        // Ссылка на серверную часть приложения
        window['serviceBase'] = 'http://' + config.domain.api + '/';
    },

    run: function () {
        config.id = this.getAppId();
        this.setHeader();
        this.setServiceBase();
        var moduleList = app.getAllModules()
        window[config.id] = window['angular'].module(config.id, moduleList);
        this.loadModules();
        this.setDefaultRoute();
    },
};
