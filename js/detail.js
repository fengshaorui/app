$(function(){({init:function(){var i=window.location.search,n=decodeURI(i.split("=")[1]);$.ajax({type:"get",url:"api/detail.php",data:{id:n},dataType:"json",success:function(i){$(".banner .swiper-slide img").prop("src","imgs/commonImg/"+i[0].indimg);var n=$("#detail").html(),e=ejs.render(n,{list:i});$(".bottom").prepend(e)},error:function(i){console.log(i)}})}}).init()});