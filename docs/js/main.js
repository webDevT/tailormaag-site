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
// ---------end slider---------

});