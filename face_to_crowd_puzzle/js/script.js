$(function(){
    $("img").click(function () {
        var altImg = $(this).attr("alt-src");
        $(this).attr("src", altImg);
    });
    // attemp to make slices toggle (not working)
    //     $("img").click(function () {
    //     var altImg = $(this).attr("alt-src");
    //     var img = $(this).attr("src");
    //     var $this = $(this);
    //     if($this.attr("src") == img) {
    //         $this.attr("src", altImg);
    //     } else {
    //       $this.attr("src", img); 
    //     }
    // });
})