$(document).ready(function() {

    $("#joinus").click(function() {
        $("#pop-up").css("display", "block");
    });
    $("#form #cancel").click(function() {
        $(this).parent().parent().hide();
    });
});