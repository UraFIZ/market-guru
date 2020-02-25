$(document).ready(function(){
    getInitiationOwlCarousalForGoodsTinder("#slide-goods-tinder");
    getNewTab(".featured-tab",".featured-products .content-wrapper", ".featured-card-row");
    if( $(window).width() <= 768 && $(window).width() >= 600) {
        getExtendSearchInputForTab();
    }else if($(window).width() < 599) {
        getShowSearchInput();
        getInitiationOwlCarousalNotResp("#respKeyCarousal");
    }
    if($(document).width() <= 1024) {
        getInitiationOwlCarousalInOneLine("#how-it-works-row")
    }
})

function getNewTab(btnClass, containerClass, cardClass) {
    $(btnClass).on('click', function () {
        var btnsIndex = $(this).index()
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest(containerClass).find(cardClass).removeClass('active').eq(btnsIndex).addClass('active');
    });
}

function getExtendSearchInputForTab() {
    $(".search-wrapper").addClass("tab");
    $("#search").addClass("tab-init");
    $("#search").on("click", function(){
       $(this).removeClass( "tab-init" ).addClass( "tab-full")
    })
    $("#search").on("mouseleave", function(){
        $(this).removeClass( "tab-full" ).addClass( "tab-init")
    })
   }

function getShowSearchInput() {
    $(".search-wrapper").css("width", "110px")
    $("#search").addClass("responsive");
    $(".search-btn-wrapper").addClass("responsive");
    $(".search-btn").click(function(e){
        if($("#search").val() !== "") {
            $(".search-wrapper").submit();
        }
        e.preventDefault();
        $(".search-wrapper").css("width", "280px");
        $(".col-md-6").removeClass("col-6").addClass("col-11");
        $(".logo-wrapper").parent().hide();
        $("#search").addClass( "active");
        
    })
    $("#search").on("mouseleave", function(){
        if($("#search").val() == "") {
            $("#search").removeClass( "active");
            setTimeout(function(){
                $(".col-md-6").removeClass("col-11").addClass("col-6");
                $(".search-wrapper").css("width", "110px");
                $(".logo-wrapper").parent().show();
            }, 500)

        }
    })
}
function getInitiationOwlCarousalInOneLine(id) {
    $(id).addClass("owl-carousel");
    $(id).owlCarousel({
        loop: false,
        autoplay: false,
        nav: false,
        dots: true,
        center: false,
        margin: 0,
        rewind: false,
        responsive: {
            1024: {
                items: 2
            },
            768: {
                items: 2,
                margin: 10
            },
            600: {
                items: 2,
                margin: 10
            },
            500: {
                items: 1,
            },
            400: {
                items: 1,
            },
            300: {
                items: 1,
            }
        }
    })
}
function getInitiationOwlCarousalNotResp(id) {
    $(id).addClass("owl-carousel");
    $(id).owlCarousel({
        loop: false,
        autoplay: false,
        nav: true,
        dots: false,
        center: false,
        margin: 0,
        rewind: false,
        items: 4
    })
}

function getInitiationOwlCarousalForGoodsTinder(id) {
    $(id).addClass("owl-carousel");
    $(id).owlCarousel({
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        center: false,
        margin: 10,
        rewind: false,
        items: 3
    })
}