////首页京东秒杀部分的效果（倒计时）
//function countTime() {
//    if(m==undefined,h==undefined,s==undefined){
//        h=0,m=0,s=0
//    }
//    var date = new Date();
//    var now = date.getTime();
//    var str = "2018/5/31 15:12:00";
//    var endDate = new Date(str);
//    var end = endDate.getTime();
//    var leftTime = end - now;
//    var d, h, m, s;
//    if (leftTime >= 0) {
//        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
//        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
//        m = Math.floor(leftTime / 1000 / 60 % 60);
//        s = Math.floor(leftTime / 1000 % 60);
//    }
//    document.getElementById("_h").innerHTML = h;
//    document.getElementById("_m").innerHTML = m;
//    document.getElementById("_s").innerHTML = s;
//    setTimeout(countTime, 1000);
//
//}
//
//countTime();
//            


var search=document.querySelector(".search")
window.onscroll=function(){
    if(document.body.scrollTop>50){
        search.style.backgroundColor="#000";
    }else{
        search.style.backgroundColor="transparent";
    }
}


            
var swiper = new Swiper('.banner .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




var swiper = new Swiper('.zhibo .swiper-container', {
     
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
//        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
          
      },
    });


