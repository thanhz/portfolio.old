$(document).ready(function(){
    $("#skills").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".skills").offset().top
        }, 500);
    });
    $("#portfolio").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".portfolio").offset().top
        }, 500);
    });
    $("#contact").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact").offset().top
        }, 500);
    });
    $(".scroll-down").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".skills").offset().top
        }, 500);
    });
});