(function() {
	class UsersController {

		/* @ngInject */
		constructor() {
			const vm = this;

			vm.users = [{
				_id: 1,
				name: 'ABC',
				address: 'Lorem Ipsam Lorem Ipsam Lorem Ipsam Lorem Ipsam',
				articlesCount: 23
			}, {
				_id: 2,
				name: 'XYZ',
				address: 'Lorem Ipsam Lorem Ipsam Lorem Ipsam Lorem Ipsam',
				articlesCount: 10
			}, {
				_id: 3,
				name: 'PQR',
				address: 'Lorem Ipsam Lorem Ipsam Lorem Ipsam Lorem Ipsam',
				articlesCount: 34
			}];
		}

	}

	register('app').controller('UsersController', UsersController);
})();
