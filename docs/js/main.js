$(function(){

// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});
//-------end sticky header--------


 if( window.innerWidth >= 768 ){
  $(window).scroll(function() {
if ($(this).scrollTop() > 320){
$('.page-menu').addClass("sticky");
}
else{
$('.page-menu').removeClass("sticky");
}
});

}

 if( window.innerWidth <= 768 ){
  $(window).scroll(function() {
if ($(this).scrollTop() > 700){
$('.page-menu').addClass("sticky");
}
else{
$('.page-menu').removeClass("sticky");
}
});

}

// --------start mobile menu---------
$('.menu__btn').click(function() {
	$(this).toggleClass('active');
	$('.header__menu-wrapper').slideToggle();
})
// -----------end mobile menu----------

// ------------start slider-------
$('.slider').slick({
  slidesToShow: 5,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 992,
      settings: {     
        slidesToShow: 4
      }
     },
     {
      breakpoint: 768,
      settings: {     
        slidesToShow: 3
      }
     }
   ]
  
});

$('.instagram__slider').slick({
  slidesToShow: 5,
   prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {     
        slidesToShow: 4
      }
     },
     {
      breakpoint: 768,
      settings: {     
        slidesToShow: 1,
        centerMode: true
      }
     }
   ]
  
});

$('.kiosk-slider').slick({
  slidesToShow: 1,
  prevArrow: $('.prev-btn'),
  nextArrow: $('.next-btn'),
  
});
// ---------end slider---------

$(".articles__tab").click(function() { 
  $(".articles__tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".articles__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");




$('.gallery-slider').slick({
  slidesToShow: 1,
  prevArrow: $('.gallery-prev'),
  nextArrow: $('.gallery-next'),
  
});


});



  $(window).scroll(function() {
if ($(this).scrollTop() > 0){
$('.page-menu-single').addClass("sticky");
}
else{
$('.page-menu-single').removeClass("sticky");
}
});


$('.more-photo').click(function() {
  $(this).hide();
  $('.video-section .col-md-3').slideDown();
})

$('.popup-close').click(function() {
  $('.popup').fadeOut();
})