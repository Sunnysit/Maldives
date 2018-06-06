$(document).ready(function(){ 
    　
    var wh=$(window).height();
    var ww=$(window).width();
    var dh=$(document).height();
    　//console.log('winh:'+wh);
    　//console.log('doch:'+dh);

 

    // CSS setting --start
    $('.banner').height(wh-42);
    $('.banner').width(ww);
    $('.subimg').width(ww/3);
    // CSS setting --end
   
    //title fade in
    setTimeout(function(){
        $('.banner-text').fadeIn('slow');
    },1000);

    //Subdot scroll function --start
    $('.subdot').on('click',function(){
       
        switch($(this).attr('id'))
        {
            case "subdot1": $('html,body').animate({scrollTop:$("#slide1").offset().top}, 1000);break;
            case "subdot2": $('html,body').animate({scrollTop:$("#slide2").offset().top}, 1000);break;
            case "subdot3": $('html,body').animate({scrollTop:$("#slide3").offset().top}, 1000);break;
        }

      
     });
 
   
    $(window).scroll(function () {
       //console.log($(window).scrollTop());
      

        //Control slide part --start

        if($(window).scrollTop()>=(dh*0.17)&&$(window).scrollTop()<(dh*0.37))
        {
            $('.subdot').removeClass('dot-active');
            $('#subdot1').addClass('dot-active');
            $("#slide-text").text(" The Maldives, officially the Republic of Maldives, is a South Asian island country, located in the Indian Ocean, situated in the Arabian Sea. ");
            $('.dot-and-text-box').fadeIn('fast');
        }
        else if($(window).scrollTop()>=(dh*0.37)&&$(window).scrollTop()<(dh*0.60))
        {
            $('.subdot').removeClass('dot-active');
            $('#subdot2').addClass('dot-active');
            $("#slide-text").text("The Maldives are known for their natural beauty including the blue ocean and white beaches, accompanied by clean air. ");
            $('.dot-and-text-box').fadeIn('fast');
        }
        else if($(window).scrollTop()>=(dh*0.60)&&$(window).scrollTop()<(dh*0.73)){
            $('.subdot').removeClass('dot-active');
            $('#subdot3').addClass('dot-active');
            $("#slide-text").text("The natural beauty of the Maldives attracts tourists all over the world and every year. More than 1,389,542 travellers all over the world visited Maldives in 2017.");
            $('.dot-and-text-box').fadeIn('fast');
        }
        else{
            $('.dot-and-text-box').fadeOut('fast');
        }

         //Control slide part --end
         
        
         //Typing effect and backtopbtn effect --start

         var inittype = new TypeIt('#last-sentence-text', { speed: 80  });
         if($(window).scrollTop()>=(dh*0.80))
         {   
            inittype.type("Visit Maldives Before It Disappear......");
            $('.index-backtopbtn').fadeIn('fast');
         }
         else{
            $('.index-backtopbtn').fadeOut('fast');
         }

       

          //Typing effect and backtopbtn effect --end

    
    });

    $('.index-backtopbtn').on('click',function(){
        
        $('html,body').animate({scrollTop:0}, 1000);
     });

    

     $( ".sub" ).hover(
        function() {
          $( this ).find('.subimg-text').addClass( "subimgtext-active" );
          $( this ).find('.subimg').addClass( "subimg-active" );
        
        }, function() {
          $( this ).find('.subimg-text').removeClass( "subimgtext-active" );
          $( this ).find('.subimg').removeClass( "subimg-active" );
        }
      );



  

    }); 


 