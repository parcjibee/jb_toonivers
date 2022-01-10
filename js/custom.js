$(document).ready(function(){

    

    $('.menubtn').on('click',function(){
        $('.subMenuGroup').stop().animate({'left':0},400);

    });
    $('.closebtn').on('click',function(){
        $('.subMenuGroup').stop().animate({'left':'-100%'},400
        );
      

      

    });

    

 

    $('header .header_slider').slick({

        autoplay:true,
        swipe:true,
        pauseOnHover:false,
        autoplaySpeed:5000,
        speed:1200,
        dots:true,
        fade:false

    });
     $('.todaylist_slick').slick({

        
        autoplay:true,
        pauseOnHover:false,
        slidesToShow:4,
        slidesToScroll:1,
        autoplaySpeed:7000,
        speed:1000,
        vertical:false,
        fade:false,
        arrows:true,
        dots:false
    });

  
});