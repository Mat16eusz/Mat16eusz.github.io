window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    let max_opacity = 0.9;
    let non_opacity_height = 200;
    if ($(window).scrollTop() <= non_opacity_height) {
        $("#navigation-bar").css("backgroundColor",
            "rgba(17,17,17," + max_opacity * ($(window).scrollTop() / non_opacity_height) + ")");
    } else {
        $("#navigation-bar").css("backgroundColor", "rgba(17,17,17," + max_opacity + ")");
    }
}