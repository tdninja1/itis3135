$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        captions: true,
        speed: 3000,
        pagerType: "short",
        pageSelector: "#pager"
    });
});