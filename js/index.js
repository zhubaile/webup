/**
 * Created by lenovo on 2017/7/25.
 */
var i=0;
var timer;
$(function(){
    $(".sow").eq(0).show().siblings().hide();
    Showtime();
    $(".tp_box").hover(function(){
        i=$(this).index();
        $(".sow").eq(i).fadeIn(800).siblings().fadeOut(800);
        $(".tp_box").eq(i).addClass("error").siblings().removeClass("error");
        clearInterval(timer);//清除轮播
    },function(){
        Showtime();
    })
});
function Showtime(){
    timer=setInterval(function(){
        i++;
        if(i==2){
            i=0;
        }
        $(".sow").eq(i).fadeIn(800).siblings().fadeOut(800);
        $(".tp_box").eq(i).addClass("error").siblings().removeClass("error");
    },3000)
};