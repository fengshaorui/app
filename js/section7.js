window.onload=function(){var e=new Swiper("#tabs-container",{speed:500,on:{slideChangeTransitionStart:function(){$(".tabs .active").removeClass("active"),$(".tabs a").eq(this.activeIndex).addClass("active")}}});$(".tabs a").on("click",function(a){a.preventDefault(),$(".tabs .active").removeClass("active"),$(this).addClass("active"),e.slideTo($(this).index())})};