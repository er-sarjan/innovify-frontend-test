(function() {
	class HttpInterceptor {

		/*@ngInject*/
		constructor($q, HTTP_CODE) {
			this.$q = $q;
			this.HTTP_CODE = HTTP_CODE;
			this.statusEvents = {
				0: HTTP_CODE.NETWORK_ERR,
				400: HTTP_CODE.BAD_REQUEST,
				401: HTTP_CODE.UNAUTHORIZED,
				403: HTTP_CODE.FORBIDDEN,
				404: HTTP_CODE.NOT_FOUND,
				405: HTTP_CODE.METHOD_NOT_ALLOWED,
				408: HTTP_CODE.REQUEST_TIMEOUT,
				419: HTTP_CODE.SESSION_TIMEOUT,
				429: HTTP_CODE.TOO_MANY_REQUESTS,
				500: HTTP_CODE.INTERNAL_SERVER_ERROR,
				501: HTTP_CODE.NOT_IMPLEMENTED,
				503: HTTP_CODE.SERVICE_UNAVAILABLE,
				504: HTTP_CODE.GATEWAY_TIMEOUT
			};
		}

		getInterceptor() {
			return {
				responseError: (response) => {

					const eventName = this.statusEvents[response.status];
					this.handleEvent(eventName);

					return this.$q.reject(response);
				}
			};
		}

		handleEvent(eventName) {
			switch (eventName) {
				case this.HTTP_CODE.NETWORK_ERR:
					console.log('network error');
					// TODO: Handle error accordingly
					break;
				case this.HTTP_CODE.NOT_FOUND:
					console.log('not found');
					// TODO: Handle error accordingly
					break;
			}
		}
	}

	register('app').factory('httpInterceptor', HttpInterceptor);

})();
