var mapkey = 'AIzaSyAeJ9uooq0npahVtWpCXObmErcywEt3b1U';

var footfall = $('#footfall-stats');
var events = $('#event-stats');
var colleges = $('#college-stats');

var duration = 2500;
var easing_type = 'linear';

function increment() {

    $({ someValue: 0 }).animate({ someValue: 25 }, {
        duration: duration,
        easing: easing_type, // can be anything
        step: function () { // called on every step
            footfall.text(Math.ceil(this.someValue).toString() + 'K+');
        }
    });



    $({ someValue: 0 }).animate({ someValue: 30 }, {
        duration: duration,
        easing: easing_type, // can be anything
        step: function () { // called on every step
            events.text(Math.ceil(this.someValue).toString() + '+');
        }
    });

    $({ someValue: 0 }).animate({ someValue: 15 }, {
        duration: duration,
        easing: easing_type, // can be anything
        step: function () { // called on every step
            colleges.text(Math.ceil(this.someValue).toString() + '+');
        }
    });

}

$('#logo-scroll').click(function (e) {
    e.preventDefault();
    var body = $("html, body");
    body.stop().animate({ scrollTop: 0 }, 1200, 'swing', function () {
    });

});

$('#contact-us-btn').click(function (e) {
    e.preventDefault();
    var body = $("html, body");
    var contact_us = $("#contact-us-section");
    body.animate({ scrollTop: contact_us.offset().top - 100 }, 1500, 'swing', function () {
    });
});

$('#menu-btn').click(function (e) {
    e.preventDefault();
    var menu = $("#menu-container");
    menu.css('transform', 'translateY(0%)');
});

$('#menu-close-btn').click(function (e) {
    e.preventDefault();
    var menu = $("#menu-container");
    menu.css('transform', 'translateY(-100%)');
});






