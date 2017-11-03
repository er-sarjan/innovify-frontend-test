const app = angular.module('app', []);

app.constant('config', {
    apiUrl: '../api/'
});

app.config(HttpProvider);

/* @ngInject */
function HttpProvider($httpProvider) {
	$httpProvider.interceptors.push(['$injector',
		function($injector) {
			return $injector.get('httpInterceptor').getInterceptor();
		}
	]);
}
