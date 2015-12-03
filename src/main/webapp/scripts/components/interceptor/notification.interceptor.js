 'use strict';

angular.module('carmelApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-carmelApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-carmelApp-params')});
                }
                return response;
            }
        };
    });
