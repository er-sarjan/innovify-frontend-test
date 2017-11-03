const app = angular.module('app', ['ui.router', 'ui.bootstrap',
	'pascalprecht.translate']);

app.constant('config', {
    apiUrl: '../api/'
});

app.config(HttpProvider);

app.config(translateConfig);

/* @ngInject */
function translateConfig($translateProvider) {

	$translateProvider.useSanitizeValueStrategy('escapeParameters');

	$translateProvider.useMissingTranslationHandlerLog();

	// TODO: Use file loader instead of static object
	$translateProvider.translations('en', {
		HEADING: 'Hello, world!<br>Welcome to home page',
		BUTTON_LANG_EN: 'English',
		BUTTON_LANG_DE: 'German'
	});

	$translateProvider.translations('de', {
		HEADING: 'Hallo Welt!<br>Willkommen auf der Startseite',
		BUTTON_LANG_EN: 'Englisch',
		BUTTON_LANG_DE: 'Deutsch'
	});


	$translateProvider.preferredLanguage('en');
	$translateProvider.fallbackLanguage('en');
}


/* @ngInject */
function HttpProvider($httpProvider) {
	$httpProvider.interceptors.push(['$injector',
		function($injector) {
			return $injector.get('httpInterceptor').getInterceptor();
		}
	]);
}
