$(function() {

    // hoover na 1 sekcji
    var svg = $(".header").find("svg");

    svg.on("mouseover", function() {
        $(this).find("symbol").addClass("header-path");
    });
    svg.on("mouseout", function() {
        $(this).find("symbol").removeClass("header-path");
    });

    //hoover na 3 sekcji
    var svgMenu = $(".home").find("svg");

    svgMenu.on("mouseover", function() {
        $(this).addClass("menu-section-hexagons");
    });
    svgMenu.on("mouseout", function() {
        $(this).removeClass("menu-section-hexagons");
    });

    // smooth scroll

    $(document).on('click', 'a', function(event) {
        event.preventDefault();
        // var menuElem = $(".main-nav").find("li");
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // gallery

    var gallery = $("#portfolio").find(".gallery2");
    var allPictures = gallery.find("img");
    var tags = $(".tags-container").find(".img-tags");
    var imgCont = $(".img-container2");

    tags.on("click", function() {
        var tagss = $(this).text();
        imgCont.each(function(){
            if($(this).hasClass(tagss)){
                $(this).show();
            }else{
                $(this).hide();
            }
        });

    });

    //sticky menu

    $(function() {
        var menuPosition = $('#services-main').offset().top;

        $(window).scroll(function() {
            if ($(window).scrollTop() > menuPosition) {
                $('#services-main').addClass("sticky");
            } else {
                $('#services-main').removeClass("sticky");
            }
        });
    });

    //progres bary

    var slickArrows = $(".our-team").find(".buttons");

    var bar1 = $("#bar1");
    var bar2 = $("#bar2");
    var bar3 = $("#bar3");
    var bar4 = $("#bar4");

    var percent1 = $("#percent1");
    var percent2 = $("#percent2");
    var percent3 = $("#percent3");
    var percent4 = $("#percent4");

    slickArrows.on("click", function() {

        var slickCurrent = $(".our-team").find(".slider").find(".slick-current");
        var web = slickCurrent.data("web");
        var graphic = slickCurrent.data("graphic");
        var html = slickCurrent.data("html");
        var ui = slickCurrent.data("ui");

        bar1.find("span").animate({
            width: web
        }, 500);
        bar2.find("span").animate({
            width: graphic
        }, 500);
        bar3.find("span").animate({
            width: html
        }, 500);
        bar4.find("span").animate({
            width: ui
        }, 500);

        percent1.text(web);
        percent2.text(graphic);
        percent3.text(html);
        percent4.text(ui);
    });

    // drugi slider z counterem

    var firstH1 = $("#firstId");
    var secondH1 = $("#secondId");
    var thirdH1 = $("#thirdId");
    var fourthH1 = $("#fourthId");
    var slider2 = $(".slider2-section");

    window.addEventListener("autoplay", function() {

        var slickCurrent2 = $(".slider2").find(".slick-current");
        var days = slickCurrent2.data("days");
        var succes = slickCurrent2.data("succes");
        var fails = slickCurrent2.data("fails");
        var costumers = slickCurrent2.data("costumers");

        firstH1.text(days);
        secondH1.text(succes);
        thirdH1.text(fails);
        fourthH1.text(costumers);

        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 500,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    //walidacja

    var submitBtn = $(".send_email");
    var nameSpan = $(".span-name");
    var emailSpan = $(".span-email");
    var textareaSpan = $(".span-textarea");
    var success = $(".success");
    var name = $("#name");
    var email = $("#email");
    var text = $("textarea");
    var form = $("form");

    submitBtn.on("click", function() {

        var canSend = true;

        if (name.val().length >= 3) {
            nameSpan.text("");
        } else {
            canSend = false;
            nameSpan.text("Your Name is too short");
        }
        if (email.val().indexOf("@") > 0) {
            emailSpan.text("");
        } else {
            canSend = false;
            emailSpan.text("There is something wrong with Your email");
        }
        if (text.val().length > 0) {
            textareaSpan.text("");
        } else {
            canSend = false;
            textareaSpan.text("Type Your message");
        }
        if (canSend === true) {
            success.text("Message sent")
        } else {
        }
    });
});
