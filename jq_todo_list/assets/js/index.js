$(function() {
    $("input").hide();
    $("button").attr("id", "red");
   
    
    $("input").on("keypress", function(e){
        if(e.which == 13) {
            var $newItem = $(this).val();
            $("ul").prepend("<li>" + $newItem + "</li>");
            $(this).val("");
            $(this).slideUp();
            $("button").show();
            numItems();
        }
    });
    
    function numItems(){
            $("span").remove();
            var $numItems = $("li[class!=complete]");
            $("p").prepend("<span>" + $numItems.length + " </span>");
    }
        $("li button").click(function (){
        $(this).remove();
    })
    
    $("ul").on("click", "li", function () {
        
        var doneItem = $(this).html();
        $(this).remove();
        $(this).appendTo("ul").addClass("complete");
        $(this).fadeOut(1000);
        numItems();
    });
    
    $("li button").click(function (){
        $(this).remove();
    })
    
    $("button").on("click", function () {
        $("input").slideDown();
        $(this).hide();
        });
    $("ul").after("<p>Total Item(s)</p>");
    numItems();
    
    
    
    
    
});
    