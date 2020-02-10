$(document).ready(function(){
    getNewTab(".featured-tab",".featured-products .content-wrapper", ".featured-card-row")
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