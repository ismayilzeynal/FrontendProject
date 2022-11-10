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