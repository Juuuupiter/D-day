/**
 * Created by 李木子 on 2017/10/3.
 */

$("#bb").on("click",function () {
    $("html,body").animate({scrollTop:$("#cloud").offset().top},100);
});
$("#cc").on("click",function () {
    $("html,body").animate({scrollTop:$("#intro").offset().top},100);
});
$("#dd").on("click",function () {
    $("html,body").animate({scrollTop:$("#contact").offset().top},100);
});


$("#text")
    .typetype('Welcome to my world!')
    .delay(100)
    .typetype("\nThis is my website.")
    .typetype("\n  ")
    .backspace(50)
    .typetype('\n\n\n这是一颗星球叫M902')

