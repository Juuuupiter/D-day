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
    .typetype('Hello, world!')
    .delay(100)
    .typetype("\n This is my website")
    .backspace(25)
    .fadeOut ()

