/*jslint nomen: true, regexp: true, unparam: true, sloppy: true, white: true, node: true */
/*global window, console, document, $, jQuery, google */


/**
 * Detect mobile platforms
 */
FastClick.attach(document.body);


/**
 * On document ready
 */
$(document).ready(function() {

    /* Works carousel */
    $('.works').each(function() {
        $('.item', this).each(function() {
            $('.photos', this).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                customPaging: function(slider, i) {
                    return '<span class="dot"></span>';
                }
            });
        });
    });

    /* About-us carousel */
    $('.about-us').each(function() {
        $('.photos', this).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            customPaging: function(slider, i) {
                return '<span class="dot"></span>';
            }
        });
    });

    /* Features carousel */
    $('.features').each(function() {
      var w = $(window), carousel, refresh = false;
      carousel = $('.list', this).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            mobileFirst: true,
            customPaging: function(slider, i) {
                return '<span class="dot"></span>';
            },
            responsive: [
              {
                    breakpoint: 767,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
              },
              {
                    breakpoint: 1023,
                    settings: 'unslick'
              }
            ]
        });
        w.resize(function () {
    			if (w.width() >= 1024) {
    				if (refresh) {
    					carousel[0].slick.refresh();
    					refresh = false;
    				}
    			} else if (!refresh) {
    				refresh = true;
    			}
    		}).trigger('resize');
    });

    /* Services images type */
    $('.services').each(function() {
        $('.image img', this).each(function() {
            if ($(this).width() * 0.8 >= $(this).height()) {
                $(this).addClass('landscape');
            } else {
                $(this).addClass('portrait');
            }
        });
    });

    /** Facebook widget */
    	(function (d, s, id) {
    		var js, fjs = d.getElementsByTagName(s)[0];
    		if (d.getElementById(id)) return;
    		js = d.createElement(s);
    		js.id = id;
    		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
    		fjs.parentNode.insertBefore(js, fjs);
    	}(document, 'script', 'facebook-jssdk'));
});

$.extend(true, $.magnificPopup.defaults, {
    tClose: 'Close (Esc)',
    tLoading: '',
    closeMarkup: '<div title="%title%" class="mfp-close">&times;</div>',
    ajax: {
        tError: '<a href="%url%">Content</a> not found.'
    },
    settings: {
        cache: false
    },
    mainClass: 'mfp-zoom-in',
    midClick: true,
    removalDelay: 300,
    autoFocusLast: false,
    preload: false,
    fixedContentPos: false
});
