
$(document).ready(function () {
    $('.menu-burger_header').click(function () {
        $('.menu-burger_header').toggleClass('open-menu');
        $('.header_nav').toggleClass('open-menu');

    });
});
$(document).ready(function () {
    $('.header_nav_a').click(function () {
        $('.header_nav').removeClass('open-menu');
        $('.menu-burger_header').removeClass('open-menu');


    });
});
