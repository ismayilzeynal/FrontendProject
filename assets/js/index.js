let isAnimated1 = false;
let isAnimated2 = false;
let isAnimated3 = false;
let isAnimated4 = false;
let isAnimated5 = false;

// session storage operations
if (sessionStorage.getItem("selectedPlan")) {
    let selectedCardId = sessionStorage.getItem("selectedPlan");
    document.getElementById(selectedCardId).classList.add("bg-secondary", "selected");
    $(".selected").html("SELECTED");
}


// animations
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    // navbar 
    if (scroll >= 30) {
        $("header").addClass("header-sticky");
    } else {
        $("header").removeClass("header-sticky");
    }

    // 1st animated elements
    if (scroll >= $(".animated-div-line").offset().top - $(window).height() + 200 && !isAnimated1) {
        setTimeout(function () { $(".animated-scroll-small-1").animate({ top: '0', opacity: '1' }, 'slow') });
        setTimeout(function () { $(".animated-scroll-small-2").animate({ top: '0', opacity: '1' }, 'slow') }, 200);
        setTimeout(function () { $(".animated-scroll-small-3").animate({ top: '0', opacity: '1' }, 'slow') }, 400);
        setTimeout(function () { $(".animated-scroll-small-4").animate({ top: '0', opacity: '1' }, 'slow') }, 600);
        isAnimated1 = true;
    }

    // 2nd animated elements
    if (scroll >= $(".animated-big-item-1").offset().top - $(window).height() + 200 && !isAnimated2) {
        setTimeout(function () { $(".animated-big-item-1").animate({ right: '0', opacity: '1' }, 'slow') });
        isAnimated2 = true;
    }
    // 3rd animated elements
    if (scroll >= $(".animated-big-item-2").offset().top - $(window).height() + 200 && !isAnimated3) {
        setTimeout(function () { $(".animated-big-item-2").animate({ right: '0', opacity: '1' }, 'slow') });
        isAnimated3 = true;
    }

    // counter animation
    if (scroll >= $('.count-item').offset().top - $(window).height() + 200 && !isAnimated4) {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1200,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        isAnimated4 = true;
    }

    // pricing card animation
    if (scroll >= $(".card-animated").offset().top - $(window).height() + 250 && !isAnimated5) {
        setTimeout(function () { $(".card-1").animate({ top: '0', opacity: '1' }, 'slow') });
        setTimeout(function () { $(".card-2").animate({ top: '0', opacity: '1' }, 'slow') }, 200);
        setTimeout(function () { $(".card-3").animate({ top: '0', opacity: '1' }, 'slow') }, 400);
        isAnimated5 = true;
    }
});


// select plan
$(".select-plan").click(function (e) {
    e.preventDefault();
    $(".select-plan").removeClass("bg-secondary");
    $(".select-plan").removeClass("selected");
    this.classList.add("bg-secondary", "selected");
    $(".selected").html("SELECTED");
    sessionStorage.setItem("selectedPlan", $(".selected").attr('id'));
});


// module

$(".menu-trigger").click(function (e) {
    let burgerNav = document.getElementById("burger-nav");
    if (burgerNav.style.display === "block")
        burgerNav.style.display = "none";
    else
        burgerNav.style.display = "block";

    $(".menu-trigger").toggleClass("active");
})

$(".submenu>a").click(function (e) {
    e.preventDefault();
    $(".submenu ul").removeClass("active");
    this.nextElementSibling.classList.add("active");
})
