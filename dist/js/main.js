/*jslint nomen: true, regexp: true, unparam: true, sloppy: true, white: true, node: true */
/*global window, console, document, $, jQuery, google */


/**
 * Detect mobile platforms
 */
FastClick.attach(document.body);


/**
 * On document ready
 */
$(document).ready(function () {

});

$.extend(true, $.magnificPopup.defaults, {
	tClose: 'Close (Esc)',
	tLoading: '',
	closeMarkup: '<div title="%title%" class="mfp-close">&times;</div>',
	ajax: {tError: '<a href="%url%">Content</a> not found.'},
	settings: {cache: false},
	mainClass: 'mfp-zoom-in',
	midClick: true,
	removalDelay: 300,
	autoFocusLast: false,
	preload: false,
	fixedContentPos: false
});
