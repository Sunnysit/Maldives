$(document).ready(function(){
    

    // Back-to-top function--start
    $(window).scroll(function () {
       // console.log($(window).scrollTop());
        if($(window).scrollTop()>0)
        {
            $('.backtopbtn').fadeIn('fast');
        }
        else{
            $('.backtopbtn').fadeOut('fast');
        }
    
    });

    $('.backtopbtn').on('click',function(){
        
        $('html,body').animate({scrollTop:0}, 1000);
     });
      // Back-to-top function--end



 });