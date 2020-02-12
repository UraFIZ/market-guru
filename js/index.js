$(document).ready(function(){
    getNewTab(".featured-tab",".featured-products .content-wrapper", ".featured-card-row")
    if( $(window).width() <= 768 && $(window).width() >= 600) {
        getExtendSearchInput();
    }else if($(window).width() < 599) {
        getShowSeachInput()
    }

})

function getNewTab(btnClass, containerClass, cardClass, func) {
    $(btnClass).on('click', function () {
        var btnsIndex = $(this).index()
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest(containerClass).find(cardClass).removeClass('active').eq(btnsIndex).addClass('active');
        if (func) {
            func();
        }
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