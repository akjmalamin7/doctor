jQuery(document).ready(function(){


    //start slick slider
      
        $('.home-slick-slider').slick({
            slidesToShow: 1,
            dots: true,
            infinite: true,
            speed: 700,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true
        });
   
     
});
//sticky header
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});