/**
 * Created by 李木子 on 2017/10/3.
 */
$("你的按钮").on("click",function () {
    $("html,body").animate({scrollTop:$("你要跳到的div").offset().top},多久跳到（毫秒）);
});