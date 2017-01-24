$(function(){

// hoover na 1 sekcji
var svg = $(".header").find("svg");

svg.on("mouseover", function(){

     $(this).find("symbol").addClass("header-path");

});

svg.on("mouseout", function(){

    $(this).find("symbol").removeClass("header-path");

});

//hoover na 3 sekcji
var svgMenu = $(".home").find("svg");

svgMenu.on("mouseover", function(){

    $(this).addClass("menu-section-hexagons");

});

svgMenu.on("mouseout", function(){

    $(this).removeClass("menu-section-hexagons");

});

// smooth scroll

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

//sticky menu
$(function(){

    var menuPosition = $('#services-main').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > menuPosition ) {
            //$('#sticky').css({position: 'fixed', top: '0px', float: 'right'});
            $('#services-main').addClass("sticky");
        } else {
            $('#services-main').removeClass("sticky");
        }
    });
});

//progres bary

var btnNext = $(".our-team").find(".buttons").find("img").last();
var btnPrev = $(".our-team").find(".buttons").find("img").first();

var bar1 = $("#bar1");
var bar2 = $("#bar2");
var bar3 = $("#bar3");
var bar4 = $("#bar4");

var percent1 = $("#percent1");
var percent2 = $("#percent2");
var percent3 = $("#percent3");
var percent4 = $("#percent4");


var current = $(".our-team").find(".slider").find(".slick-current");


btnNext.on("click", function(){

    var web = $(".our-team").find(".slider").find(".slick-current").data("web");
    var graphic = $(".our-team").find(".slider").find(".slick-current").data("graphic");
    var html = $(".our-team").find(".slider").find(".slick-current").data("html");
    var ui = $(".our-team").find(".slider").find(".slick-current").data("ui");

    bar1.find("span").animate({width: web}, 500);
    bar2.find("span").animate({width: graphic}, 500);
    bar3.find("span").animate({width: html}, 500);
    bar4.find("span").animate({width: ui}, 500);

    percent1.text(web);
    percent2.text(graphic);
    percent3.text(html);
    percent4.text(ui);


});

btnPrev.on("click", function(){

    var web = $(".our-team").find(".slider").find(".slick-current").data("web");
    var graphic = $(".our-team").find(".slider").find(".slick-current").data("graphic");
    var html = $(".our-team").find(".slider").find(".slick-current").data("html");
    var ui = $(".our-team").find(".slider").find(".slick-current").data("ui");

    bar1.find("span").animate({width: web}, 500);
    bar2.find("span").animate({width: graphic}, 500);
    bar3.find("span").animate({width: html}, 500);
    bar4.find("span").animate({width: ui}, 500);

    percent1.text(web);
    percent2.text(graphic);
    percent3.text(html);
    percent4.text(ui);


});

var firstH1 = $("#firstId");
var secondH1 =  $("#secondId");
var thirdH1 =  $("#thirdId");
var fourthH1 =  $("#fourthId");
console.log(firstH1);
console.log(secondH1);
console.log(thirdH1);
console.log(fourthH1);


var slider2 = $(".slider2-section");
console.log(slider2);



window.addEventListener("autoplay", function(){


    var days = $(".slider2").find(".slick-current").data("days");
    var succes = $(".slider2").find(".slick-current").data("succes");
    var fails = $(".slider2").find(".slick-current").data("fails");
    var costumers = $(".slider2").find(".slick-current").data("costumers");

    console.log(days);
    console.log(succes);
    console.log(fails);
    console.log(costumers);


    firstH1.text(days);
    secondH1.text(succes);
    thirdH1.text(fails);
    fourthH1.text(costumers);

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });



});

//counter animation


});
