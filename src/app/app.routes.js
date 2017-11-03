(function() {

	angular
			.module('app')
			.config(RouteConfig);

	/* @ngInject */
	function RouteConfig($stateProvider, $urlRouterProvider) {

		//Mapping routes for view and controller
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/components/home/home.tpl.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: 'app/components/blog/blog.tpl.html',
				controller: 'BlogController',
				controllerAs: 'vm'
			})
			.state('users', {
				url: '/users',
				templateUrl: 'app/components/users/users.tpl.html',
				controller: 'UsersController',
				controllerAs: 'vm'
			})
			.state('notfound', {
				url: '/notfound',
				templateUrl: 'app/components/notfound/notfound.tpl.html'
			});

		$urlRouterProvider.otherwise('notfound');
	}
})();

