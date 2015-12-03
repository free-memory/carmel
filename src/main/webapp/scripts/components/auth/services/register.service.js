'use strict';

angular.module('carmelApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


