
$(document).ready(function () {
    $('.toggleNav').click(function () {
        var hidden = $('.nav');
        if (hidden.hasClass('visible')){
            hidden.animate({"right":"-1000px"}, "slow").removeClass('visible');
        } else {
            hidden.animate({"right":"0px"}, "slow").addClass('visible');
        }
    });
    $('.nav a').click(function () {
        $('.nav').slideToggle().slow();
    });
});
