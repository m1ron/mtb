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

/* Works carousel */
	$('.works').each(function() {
		$('.item', this).each(function(){
			$('.photos', this).slick({
			  infinite: true,
			  slidesToShow: 1,
			  slidesToScroll: 1,
				arrows: false,
				dots: true,
				customPaging : function(slider, i) {
        return '<span class="dot"></span>';
    		}
			});
		});
	});

	/* Services images type */
	$('.services').each(function () {
		$('.image img', this).each(function () {
			if ($(this).width() * 0.8 >= $(this).height()) {
				$(this).addClass('landscape');
			} else {
				$(this).addClass('portrait');
			}
		});
	});

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
