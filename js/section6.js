$(function(){var t=function(){function o(){new Swiper(".swiper-container",{slidesPerView:2.3,spaceBetween:30,freeMode:!0})}return{first:function(){$(".hot-list-top1 div").click(function(){$(".hot-list-top1").children().eq($(this).index()).addClass("hot-list-left").siblings().removeClass("hot-list-left");var t=$(this).html();console.log($(this).html()),$.ajax({type:"post",url:"api/section6.php",data:{type:t,type1:"简易录音"},dataType:"json",success:function(t){console.log(t);var e=ejs.render($(".tpl").html(),{data:t[1]});$(".hot-list-down-one1").html(e),o();var l=ejs.render($(".tpl1").html(),{data:t[2]});$(".hot-list-down-one2").html(l),o()}})})},tabOne:o,second:function(){window.onload=function(){$.ajax({type:"post",url:"api/section6-1.php",data:{type:"专业录音",type1:"热门品牌",type2:"影视录音机",type3:"影视录音麦克风"},dataType:"json",success:function(t){console.log(t);var e=ejs.render($(".tpl2").html(),{data:t[1]});$(".ly-hot-list").html(e);var l=ejs.render($(".tpl3").html(),{data:t[2]});$(".MKF-brand").html(l);var o=ejs.render($(".tpl4").html(),{data:t[3]});$(".Video-recording1").html(o);var i=ejs.render($(".tpl5").html(),{data:t[4]});$(".Video-recording2").html(i)}})}},third:function(){$(".related-products1 div").click(function(){$(".related-products1").children().eq($(this).index()).addClass("hot-list-left").siblings().removeClass("hot-list-left");var t=$(this).html();console.log($(this).html()),$.ajax({type:"post",url:"api/section6-2.php",data:{type:t},dataType:"json",success:function(t){console.log(t);var e=ejs.render($(".tpl6").html(),{data:t[1]});$(".Video-recording3").html(e),o()}})})},autoClickTab:function(){$(".hot-list-top1").children().eq(0).trigger("click"),$(".hot-list-down").children().eq(0).trigger("click"),$(".related-products1").children().eq(0).trigger("click")}}}();t.first(),t.tabOne(),t.second(),t.third(),t.autoClickTab()});