$(function(){
    $('.mo-tabtit li').click(function(){
        $('.mo-tabtit li').removeClass('active');
        $(this).addClass('active');
        $('.mo-tabcont').hide();
        $('.mo-tabcont').eq($(this).index()).show();
    });
    $('.btn-close').click(function(){
        $(this).parents('.newkeymes').fadeOut();
        $('.whitebg').fadeOut();
    });
    $('.btn-subclose').click(function(){
        $(this).parents('.subjectimg').fadeOut();
        $('.whitebg').fadeOut();
    });
    /*$('.subject').click(function(){
        $('.whitebg').fadeIn();
        $(this).parents('.mydeli-list').next().fadeIn();
    });
    $('.lorem').click(function(){
        n++;
        if(n%2 == 1){
            $(this).css({'height':'auto','overflow':'auto'});
            $(this).siblings('.tit').find('.fa').removeClass('fa-chevron-right').addClass('fa-chevron-down');
        }else{
            $(this).css({'height':'0.4rem','overflow':'hidden'});
            $(this).siblings('.tit').find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-right');
        }
    });
    $('.tit-txt').click(function(){
        n++;
        if(n%2 == 1){
            $(this).parent().siblings('.lorem').css({'height':'auto','overflow':'auto'});
            $(this).siblings('.tit-ico').children('.fa').removeClass('fa-chevron-right').addClass('fa-chevron-down');
        }else{
            $(this).parent().siblings('.lorem').css({'height':'0.4rem','overflow':'hidden'});
            $(this).siblings('.tit-ico').children('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-right');
        }
        
    });
    $('.tit-ico .fa').click(function(){
        n++;
        if(n%2 == 1){
            $(this).parents('.tit').siblings('.lorem').css({'height':'auto','overflow':'auto'});
            $(this).removeClass('fa-chevron-right').addClass('fa-chevron-down');
        }else{
            $(this).parents('.tit').siblings('.lorem').css({'height':'0.4rem','overflow':'hidden'});
            $(this).removeClass('fa-chevron-down').addClass('fa-chevron-right');
        }
    });*/
    
    $('.btn-getkey').click(function(){
        $('.newkeymes').fadeIn();
    });
    $('.keylist-c li').click(function(){
        var _this=$(this);
        if(_this.hasClass("active")){
            _this.removeClass('active');
        }else{
            _this.addClass('active');
        }
    });
    $('.yourmess').click(function(){
        $('.newkeymes').fadeIn();
    });
    $('.updateacc').click(function(){
        $('.newkeymes').fadeIn();
    });
    $('.searchli-btn').click(function(){
        $('.searchbox').stop().slideDown();
        $('.searchbox input').focus();
    });
   $('.searchbox .fa-close').click(function(){
       $(this).parent().slideUp();
   });
  $('.subject-btn').click(function(){
      $('.whitebg').fadeIn();
      $('.subjectimg').fadeIn();
  });
    
})




