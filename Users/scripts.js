$(function() {

    $("form").on("submit", function(e) {
        e.preventDefault();
            var first = $("#first").val();
    var last = $("#last").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
        $("table").append("<tr><td>" + first + "</td><td>" + last + "</td><td>" + email + "</td><td>" + phone + "</td></tr>").addClass("newRow");
        $("input").not(".submit").val(" ");
    })
})