const HTTP_CODE = {
	NETWORK_ERR: 'Network Error',
	BAD_REQUEST: 'Bad Request',
	CONFLICT: 'Conflict',
	FORBIDDEN: 'Forbidden',
	GATEWAY_TIMEOUT: 'Gateway Timeout',
	INTERNAL_SERVER_ERROR: 'Server Error',
	METHOD_NOT_ALLOWED: 'Method Not Allowed',
	NOT_FOUND: 'Not Found',
	NOT_IMPLEMENTED: 'Not Implemented',
	REQUEST_TIMEOUT: 'Request Timeout',
	SERVICE_UNAVAILABLE: 'Service Unavailable',
	SESSION_TIMEOUT: 'Session Timeout',
	TOO_MANY_REQUESTS: 'Too Many Requests',
	UNAUTHORIZED: 'Unauthorized',
	UNSUPPORTED_MEDIA_TYPE: 'Unsupported Media Type'
};

register('app').constant('HTTP_CODE', HTTP_CODE);
