(function() {
	// TODO: This service is not removed for showing 404 alert using interceptor which shows console log for not found
	class ItemsService {

		/*@ngInject*/
		constructor($http, config) {
			this.$http = $http;
			this.config = config;
		}

		getItems() {
			const apiUrl = this.config.apiUrl;

			return this.$http
					.get(apiUrl + 'items')
					.then((result) => {
						// prepend the API url to the images
						return result.data.map((item) => {

							item.image = apiUrl + item.image;
							item.thumb = apiUrl + item.thumb;
							return item;

						});
					});
		}

	}

	register('app').service('itemsService', ItemsService);

})();
