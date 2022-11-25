$(document).ready(function()
{
    $(".features .tabs-div ul li").click(function()
    {
        $(this).css({"background-color":"#ff9933"}).siblings().css({"background-color":"#333"});
        $(".features .tab1,.features .tab2,.features .tab3").fadeOut("slow");
        $($(this).data("show")).fadeIn("slow");
    });
});