/*$(document).ready(function () {
    $("h1").click(function () {
        alert("This is a header!");
    });
    $("p").click(function () {
        alert("This is a paragraph!");
    });
    $("img").click(function () {
        alert("This is an image!");
    });
});*/


/*$(document).ready(function () {
    $("#appear").click(function () {
        $('img').show(2000);
    });
    $("#disappear").click(function () {
        $('img').hide(2000);
    });
});*/


/*$(document).ready(function () {
    $('li').css('color', 'blue');
});*/

$("li").hover(function () {
    $(this).css("color", "yellow");
}, function () {
    $(this).css("color", "blue");
});
