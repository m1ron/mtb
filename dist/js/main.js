/*jslint nomen: true, regexp: true, unparam: true, sloppy: true, white: true, node: true */
/*global window, console, document, $, jQuery, google */


/** Remove tap delay on touch devices */
FastClick.attach(document.body);

/** Magnific Popup Settings */
$.extend(true, $.magnificPopup.defaults, {
    closeMarkup: '<span title="%title%" class="mfp-close">x</span>',
    gallery: {
        arrowMarkup: '<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>'
    },
    settings: {
        cache: false
    },
    mainClass: 'mfp-slide-in',
    removalDelay: 800,
    midClick: true,
    autoFocusLast: false,
    preload: false,
    fixedContentPos: true,
    fixedBgPos: true
});

/** On document ready */
$(document).ready(function() {

    /** Sticky header */
    (function() {
        function stick() {
            body.addClass('nav-sticky');
            setTimeout(function() {
                body.addClass('nav-sticky-animate');
                sticked = true;
            }, 20);
        }

        function unstick() {
            body.removeClass('nav-sticky-animate');
            setTimeout(function() {
                body.removeClass('nav-sticky');
                sticked = false;
            }, 20);
        }

        function check() {
            if (w.scrollTop() > minHeight) {
                if (!sticked) {
                    stick();
                }
            } else {
                if (sticked) {
                    unstick();
                }
            }
        }

        function init() {
            inited = true;
            check();
            w.on('scroll touchmove', check);
        }

        function uninit() {

            inited = false;
            body.removeClass('nav-sticky');
            w.off('scroll touchmove', check);
        }

        function onResize() {
            if (w.width() > minWidth) {
                if (!inited) {
                    init();
                }
            } else {
                if (inited) {
                    uninit();
                }
            }
        }

        var body = $('body'),
            w = $(window),
            sticked = false,
            inited = false,
            minWidth = 1170,
            minHeight = 250;

        w.on('resize', onResize);
        onResize();
    }());

    /** Navigation */
    $('.nav').each(function() {
        function toggleNav() {
            function keyhandler(e) {
                if (e.which == 27) {
                    close();
                }
            }

            function clickhandler(e) {
                if (!flag) {
                    flag = true;
                    setTimeout(function() {
                        flag = false;
                    }, 200);
                    if (($(e.target).closest('.nav').length <= 0) && ($(e.target).closest('.toggle').length <= 0)) {
                        close();
                    }
                }
            }

            function open() {
                html.on('keydown', keyhandler).addClass('nav-visible');
                body.on('click touchstart', clickhandler);
                setTimeout(function() {
                    html.addClass('nav-open');
                    setTimeout(function() {
                        html.addClass('nav-done');
                    }, 400);
                }, 20);
            }

            function close() {
                html.off('keydown', keyhandler).removeClass('nav-open');
                body.off('click touchstart', clickhandler);
                setTimeout(function() {
                    html.removeClass('nav-visible').removeClass('nav-done');
                }, 420);
            }

            if (html.hasClass('nav-open')) {
                close();
            } else {
                open();
            }
            return false;
        }

        var body = $('body'),
            html = $('html'),
            toggle = $('.header .toggle'),
            ul = $('ul', this),
            flag = false;
        $('<li/>').text('close').wrapInner('<a href="#" class="close"/>').appendTo(ul);
        $('<i/>').text('x').appendTo(toggle);
        var close = $('.close', this);
        toggle.add(close).on('click', toggleNav);
    });

    /** Works carousel */
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

    /** About Us carousel */
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

    /** Features carousel */
    $('.features').each(function() {
        function onresize() {
            if (w.width() > 1023) {
                if (refresh) {
                    carousel[0].slick.refresh();
                    refresh = false;
                }
            } else {
                if (!refresh) {
                    carousel[0].slick.refresh();
                    refresh = true;
                }
            }
        }

        var w = $(window),
            refresh = false;

        var carousel = $('.list', this).slick({
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
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 1023,
                settings: 'unslick'
            }]
        });
        w.resize(onresize).trigger('resize');
    });

    /** Services images type */
    $('.services').each(function() {
        $('.image img', this).each(function() {
            var that = $(this);
            if (that.width() * 0.8 >= that.height()) {
                that.addClass('landscape');
            } else {
                that.addClass('portrait');
            }
        });
    });

    /** Resizeable image */
    $('.image-resizebale').each(function() {
        var img = $('img', this).eq(0);
        if (img.width() * 0.8 >= img.height()) {
            img.addClass('landscape');
        } else {
            img.addClass('portrait');
        }
    });

    /** Popup images */
    $('.open-popup').magnificPopup();

    /** Facebook widget */
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});
