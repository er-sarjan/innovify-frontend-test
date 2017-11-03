(function() {
	class HomeController {

		/* @ngInject */
		constructor($translate) {
			const vm = this;

			vm.changeLanguage = (langKey) => {
				$translate.use(langKey);
			};
		}

	}

	register('app').controller('HomeController', HomeController);
})();
