//开场动画
var start = 5;
var step = 1;
function count()
{
	document.querySelector(".daojishi").innerHTML = start;
	if(start == 5)
		step *= -1;
	start += step;
	setTimeout("count()",1000);
}
window.onload = count;
var guanggao_bg=document.querySelector(".guanggao-bg");
var guanggao_img=document.querySelector(".guanggao-img");
var guanbi=document.querySelector(".guanbi")
var shiji=document.querySelector(".daojishi");
//var txt=shiji.innerHTML;
//console.log(txt)
//console.log(shiji)
setTimeout(function(){
    guanggao_bg.style.display="none";
    guanggao_img.style.display="none";
},6000)
guanbi.onclick=function(){
    guanggao_bg.style.display="none";
    guanggao_img.style.display="none";
    sessionStorage.guanggao_bg="false";
    sessionStorage.guanggao_img="false";
}
if(sessionStorage.guanggao_bg=="false"){
    guanggao_bg.style.display="none";
}else{
    guanggao_bg.style.display="block";
}
if(sessionStorage.guanggao_img=="false"){
    guanggao_img.style.display="none";
}else{
    guanggao_img.style.display="block";
}













/*------第一个轮播图------*/

var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
/*------第二个轮播图------*/

 var swiper = new Swiper('.swiper-container2', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
    });

/*------第三个轮播图------*/
var swiper = new Swiper('.swiper-container3', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
       
        clickable: true,
      },
    });

/*-------回到顶部-------*/
var tops=document.querySelector(".img3");
    if(tops !=null){
        tops.style.display="none";
        window.onscroll = function(){
            var juli1=document.documentElement.scrollTop||document.body.scrollTop;
            if(juli1<600){
                tops.style.display="none";
            }else{
                  tops.style.display="block";
            }
        };
    
        function smoothscroll(){
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                 window.requestAnimationFrame(smoothscroll);
                 window.scrollTo (0,currentScroll - (currentScroll/5));
            }
        }
        
       tops.onclick=function(){
           
            smoothscroll();
       };
    }