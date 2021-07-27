
$(function(){

  // Slider Banner
  
  $('.slider-start').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed:800,
      arrows:true,
      speed:800,
      prevArrow:'.left',
      nextArrow:'.right',
      dots:false,
    });
  
  // lightbox
 $('.venobox').venobox(); 

 	//Add New Navbar

   $(window).scroll(function(){

    var scroll =$(this).scrollTop();
    if(scroll>200){
        $('.navbar').addClass('navbar-new');
    }else{
        $('.navbar').removeClass('navbar-new');
    };
   
});



    
  });