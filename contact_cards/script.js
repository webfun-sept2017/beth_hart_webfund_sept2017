$(document).ready(function() {
    $("form").submit(function(e){
        // $(".cards").append('<div class="sample"> <h2>Name: ' + $("#first").val()+ ' '+ $("#last").val() + '</hr><p>Phone: ' + $("#phone").val() + '</p>');
        // $("p").hide();
        e.preventDefault();
        var first = $("#first").val();
        var last = $("#last").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        $(".cards").append(`
            <div class="sample"
                <h2 id="nice">${first} ${last}</h2>
                <h5>(toggle details)</h5>
                <p>Phone: ${phone}</p>
                <p>Email: ${email}</p>
            </div>`)
            $("p").hide();
        $("input:not(#submit)").val("");
    })
    $(".cards").on("click", "h5", function(){
        $(this).siblings().toggle()
 
    })
})