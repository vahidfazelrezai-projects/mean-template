angular.module('exampleApp', ['ngRoute'])

//routing definitions
.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
	    $routeProvider
/* example view and controller
		.when('/', {
	        templateUrl: '/views/splash.html',
	        controller: 'splashController'
	    })
*/
	    .otherwise({
	        redirectTo: '/'
	    });
    //remove # from URL
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}])

.run(function($route, $rootScope, $location, $routeParams) {
    //watch for route changes and redirect accordingly
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    	//set current variable to template (used in showing/hiding elements)
    	$rootScope.current = next.templateUrl;
	});
})