function windowScroll() {
    var e = document.getElementById("page-header");
    50 <= document.body.scrollTop || 50 <= document.documentElement.scrollTop ? e.classList.add("header-is-sticky") : e.classList.remove("header-is-sticky")
}
window.addEventListener("scroll", function(e) {
    e.preventDefault(), windowScroll()
});



$(".rotate").textrotator({
    animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
});