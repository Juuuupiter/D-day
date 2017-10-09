/**
 * Created by 李木子 on 2017/10/3.
 */

$("#bb").on("click",function () {
    $("html,body").animate({scrollTop:$("#about-me").offset().top},1000);
});