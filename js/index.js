$(document).ready(function(){
    getNewTab(".featured-tab",".featured-products .content-wrapper", ".featured-card-row")
    if( $(window).width() <= 768 && $(window).width() >= 600) {
        getExtendSearchInput();
    }else if($(window).width() < 599) {
        getShowSeachInput()
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

function getExtendSearchInput() {
    $("#search").on("click", function(){
        $(this).animate({
            "width": "300px"}, 100);
    })
    $("#search").on("mouseleave", function(){
        $(this).animate({
            "width": "180px"}, 100);
    })
   }

function getShowSeachInput() {
    $(".search-btn").on("click", function(){
        var logoColumn = $(".logo-col");
        $(logoColumn).hide();
        $(".search-col").addClass("col-10");
        $("#search").animate({
            "width": "80%"
        }, 100)
        $("#search").show();
    })
    $(".search-btn").on("mouseleave", function(e){
        $("#search").hide();
        $(".search-col").removeClass("col-10");
        $(".logo-col").show();
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