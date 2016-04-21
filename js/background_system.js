(function($){
    var myStatus=false;
    $(".nav_first").click(function(){
        $(".nav_first").removeClass("clickColor");
        $(this).addClass("clickColor");
        var navSencond=$(this).data("toggle-expand")
        $(navSencond).toggle();
    })
    $(".nav_second>li").click(function(){
        $(".nav_second>li").removeClass("clickColor");
        $(this).addClass("clickColor");
    })
})(jQuery)
