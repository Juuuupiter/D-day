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



        $("#letter-up")
        .typetype(
            'Hey,',
            {
              e:0,
              t:100
            });

         $("#letter-middle ")
             .delay(1000)
             .typetype('Welcome to my world!',
            {
                e:0,
                t:100
            })
        .delay(100);
         $("#letter-down")
             .delay(3000)
             .typetype("This is my website.",
            {
                e:0,
                t:100
            })
        .backspace(60);
         $("#letter-middle")
             .delay(5000)
             .backspace(60);
         $("#letter-down")
             .delay(500)
              .typetype('这是一颗星球叫M902 ♥',
            {
                e:0,
                t:100
            });
