$(function(){
    $("img").click(function(){
        $(this).animate({opacity:0}, 1000);
    });
    $("button").click(function (){
        $("img").animate({opacity:1}, 1000);
    })
})