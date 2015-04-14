angular.module('exampleApp').factory('DataService', function($http, $q){
	return {
        getData: function(path) {
            return $http.get(path)
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    return $q.reject(response.data);
            	}
            );
        },
        postData: function(path, paramsToPass) {
            return $http.post(path, { params: paramsToPass})
                .then(function(response) {
                    return response.data;
                }, function(response) {
                    return $q.reject(response.data);
                }
            );
        }
    };
});