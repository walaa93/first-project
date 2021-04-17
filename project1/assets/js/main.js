$(document).ready(function(){
    $(".services-carousel").owlCarousel({
        loop:true,
        rtl:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
               
                
            },
            600:{
                items:2,
                nav:true,
              
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
       
        }
    });
    $('.carousel-clients').owlCarousel({
        loop:true,
        rtl:true,
        margin:50,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
              
                
            },
            600:{
                items:2,
                nav:true,
              
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
       
        }
    });
});


//////////////////////////////
$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});

$(document).ready(function(){
    $('.right').click(function(){
        $('.active').prev().trigger('click');
    })
    $('.left').click(function(){
        $('.active').next().trigger('click');
    })
})

    
    
    
    
