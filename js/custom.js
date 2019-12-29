
$(window).on("load",function(){$("body").css("overflow-y","auto");$(".loading").fadeOut(2000)});
$(function(){
  var a=20;
  $(window).scroll(function(c){var b=$(this).scrollTop();if(b>a){$(".navbar").addClass("bg-light")}else{if(b<a){$(".navbar").removeClass("bg-light");
  $(".navbar-toggler").click(function(){$(".navbar").addClass("bg-light")})}}});
  $(".owl-carousel").owlCarousel({navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],rtl:true,margin:36,loop:true,responsiveClass:true,nav:true,responsive:false,responsive:{0:{items:2,slideBy:2},750:{items:3,slideBy:3},970:{items:4,slideBy:4},1000:{items:5,slideBy:5}}});$("#ID8_1535595314 rect,#ID8_1535595314 path").css({fill:"#303030",tranition:"0.3s ease-in-out all"});
  $(".mada").mouseenter(function(){$("#ID8_1535595314 rect,#ID8_1535595314 path").css({fill:"#FE5754"})});
  $(".mada").mouseleave(function(){$("#ID8_1535595314 rect,#ID8_1535595314 path").css({fill:"#303030"})});
  $(".up-to").click(function(){$("html,body").animate({scrollTop:"0"},2500)});
  $(".nav-item").click(function(){$(this).addClass("active").siblings().removeClass("active")})
});
