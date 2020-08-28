/* eslint-disable */
// Page loading animation
$(window).on('load', function () {
    if ($('.cover').length) {
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $("#preloader").animate({
        'opacity': '0'
    }, 600, function () {
        setTimeout(function () {
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});

// Nav bar scrolling animation
$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $("nav").addClass("background-header");
        $("#logo").attr("src", "assets/images/tiny-steps-black.png")
    } else {
        $("nav").removeClass("background-header");
        $("#logo").attr("src", "assets/images/tiny-steps.png")
    }
});