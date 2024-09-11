$(document).ready(function () {

    // Hamberger
    $(".line-menu-sec").click(function () {
        $(this).toggleClass("activeline");
        $(".head-right").toggleClass("hamOn");
    });

    $(".destiTabs > li > a").on("click", function () {
        var relTab = $(this).attr("rel");
        $(".planetSec").removeClass("current");
        $(".destiTabs > li > a").removeClass("active");
        $(this).addClass("active");
        $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .find("#" + relTab)
            .addClass("current");
    });

    $(".techTabs > li > a").on("click", function () {
        var relTab = $(this).attr("rel");
        $(".techSec").removeClass("current");
        $(".techTabs > li > a").removeClass("on");
        $(this).addClass("on");
        $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .find("#" + relTab)
            .addClass("current");
    });

    $('.crewSliderSec').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        
      });

});