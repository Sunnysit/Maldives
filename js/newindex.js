
//scroll reveal effect //
window.sr = ScrollReveal();
sr.reveal('.scrollReveal-wrapper', {
  duration: 1500,
  reset: true
});


$(window).scroll(function () {

    if($(window).scrollTop()>=800)
    {
        $('.index-backtopbtn').slideDown();
    }
    else{
        $('.index-backtopbtn').slideUp();
    }


});

$('.index-backtopbtn').on('click',function(){
        
    $('html,body').animate({scrollTop:0}, 1000);
 });