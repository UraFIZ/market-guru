$(document).ready(function(){
    getInitiationOwlCarousalForTinder("#tinder-carousel");
    getInitiationOwlCarousalNotResp("#respKeyCarousal");
    //working with lazy loading
    // getLoadingCardResponsive()
    getClickedCardsInTabs();
    getNewTab(".featured-tab",".featured-products .content-wrapper", ".featured-card-row", getClickedCardsInTabs)
    if( $(window).width() <= 768 && $(window).width() >= 600) {
        getExtendSearchInputForTab();
    }else if($(window).width() < 599) {
        getShowSearchInput();
    }
    if($(document).width() <= 1024) {
        getInitiationOwlCarousalInOneLine("#how-it-works-row")
    }
})

function getNewTab(btnClass, containerClass, cardClass, func) {
    $(btnClass).on('click', function () {
        var btnsIndex = $(this).index()
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest(containerClass).find(cardClass).removeClass('active').eq(btnsIndex).addClass('active');
         var innerCards = $(this).closest(containerClass).find(cardClass).eq(btnsIndex).children();
            if(func) {
                func(innerCards);
            }
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
    if($(window).width()<=576) {
        $(id).addClass("owl-carousel");
        $(id).owlCarousel({
            loop: false,
            autoplay: false,
            nav: true,
            dots: false,
            center: false,
            margin: 0,
            rewind: false,
            items: 4,
            
        })
    }

}

function getInitiationOwlCarousalForTinder(id) {
    $(id).addClass("owl-carousel");
    $(id).owlCarousel({
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        center: false,
        margin: 0,
        rewind: false,
        items: 1,
        stagePadding: 60,
        responsive: {
            1400: {
                items: 1,
                stagePadding: 130,
            },
            1280: {
                items: 1,
                stagePadding: 130,
            },
            1024: {
                items: 1,
                stagePadding: 80,
            },
            768: {
                items: 1,
                stagePadding: 80,
            },
            600: {
                items: 1,
                stagePadding: 40,
            },
            470: {
                items: 1,
                stagePadding: 30,
            },
            360: {
                items: 1,
                stagePadding: 30,
            }
        }
    })
}


function getLoadedMoreCards(data=[], itemToShow, footerWidth) {
    $(".show-more").hide();
    var workingData = checkIsDataAvailable();
    $(workingData).hide();
      var step = itemToShow;
    $(workingData).slice(0, step).show();
    if(workingData.length < step) {
        $(".show-more").hide();
    }
    $(window).scroll(function() {
        var { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - footerWidth) {
            if(workingData.length > step ) {
                step = step + itemToShow;
                $(".show-more").show();
                setTimeout(function(){
                    $(".show-more").hide();
                }, 1000)
                $(workingData).slice(0, step).show("slow");
            }
        }
    })
    // $(btnForShowingMore).on("click", function(){
    //     if(workingData.length + 5 > step ) {
    //         step +=step
    //         $(".show-more-loader").addClass("active");
    //         setTimeout(function(){
    //             $(".show-more-loader").removeClass("active");
    //             $(workingData).slice(0, step).show("slow");
    //         }, 1500)
    //     }else{
    //         $(".show-more-loader").hide();
    //         $(btnForShowingMore).text("There is no more :(")
    //         return false
    //     }
    // })

}

function isBtnShowMoreDisplayed(data =[]) {
    $(".show-more").show();
    if(!data) {
        $(".show-more").hide();
    }
}
function getClickedCardsInTabs(data=[]) { 
    var workingData = checkIsDataAvailable(data);
    isBtnShowMoreDisplayed(workingData)
    var likeBtn, dislikeBtn;
    if($(window).width() >= 768) {
        likeBtn = $(workingData).map(function(inx, item) {
            return $(item).find(".featured-like-wrapper .featured-like").off("click");
       })
        dislikeBtn = $(workingData).map(function(inx, item) {
           return $(item).find(".featured-like-wrapper .featured-dislike").off("click");
      })
    }else{
        likeBtn = $(workingData).map(function(inx, item) {
            return $(item).find(".respo-voiting-section .featured-like").off("click");
       })
        dislikeBtn = $(workingData).map(function(inx, item) {
           return $(item).find(".respo-voiting-section .featured-dislike").off("click");
      })
    }

    $(likeBtn).each(function(inx, item){
        $(item).click(function(){
            console.log(this)
            var itemId = $(item).parents('.col-6').attr("id");
            if($(this).siblings().attr("class").indexOf("active") > 0) {
                $(this).siblings().removeClass("active")
            }
            $(this).toggleClass("active")
        })
    })
    $(dislikeBtn).each(function(inx, item){
        $(item).click(function(){
            console.log(this)
           var itemId = $(item).parents('.col-6').attr("id");
           if($(this).siblings().attr("class").indexOf("active") > 0) {
            $(this).siblings().toggleClass("active")
           }
            $(this).toggleClass("active")
    
        })
    })

}
function checkIsDataAvailable(data) {
    var initialData = $(".featured-card-row.active").children();
    var workingData = [];
    if(initialData.length < 1 && data.length < 1) {
        return false
    }else if(initialData.length > 1 && data.length < 1) {
        workingData = $(initialData).map(function(inx, item) {
            return item
        })
    }else if(initialData.length < 1 && data.length > 1) {
        workingData = $(data).map(function(inx, item) {
            return item
        })
    }else{
        workingData = $(data).map(function(inx, item) {
            return item
        })
    } 
    return workingData;
}


function getLoadingCardResponsive(data) {
    var spaceUselessForScrolling =  $("footer").height() +  $(".how-it-works").outerHeight() -50;
    if(!data) {
        if ($(window).width() >= 1200) {
            getLoadedMoreCards([], 6, spaceUselessForScrolling);
        } else if ($(window).width() >= 996 && $(window).width() < 1200) {
            getLoadedMoreCards([], 4, spaceUselessForScrolling);
            console.log("less 2000")
        } else if ($(window).width() >= 576 && $(window).width() < 995) {
            getLoadedMoreCards([], 2, spaceUselessForScrolling);
        } else {
            getLoadedMoreCards([], 2, spaceUselessForScrolling);
        }
    }else{
        if ($(window).width() >= 1200) {
            getLoadedMoreCards(data, 6, spaceUselessForScrolling);
        } else if ($(window).width() >= 996 && $(window).width() < 1200) {
            getLoadedMoreCards(data, 4, spaceUselessForScrolling);
            console.log("less 2000")
        } else if ($(window).width() >= 576 && $(window).width() < 995) {
            getLoadedMoreCards(data, 2, spaceUselessForScrolling);
        } else {
            getLoadedMoreCards(data, 2, spaceUselessForScrolling);
        }
    }

}
