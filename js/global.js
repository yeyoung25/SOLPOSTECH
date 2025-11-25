$(window).on('scroll', function() {
  $('header').toggleClass('shrink', $('.menuBar').hasClass('toggle') || $(this).scrollTop() > 50);
});


  $(document).ready(function(){
    headerScroll();
    navButton();
    depth2toggle();
    mainFnb($("header>div>.navMenu>li"));
    navMenuButton();
    headershrink();
  });


  function headerScroll(){
    if(!$("#wrap").hasClass("indexContainer")){
      return;
    }else if($(window).scrollTop() == 0 && !$("#fnbPanel").hasClass("act")){
      $("header").removeClass("shrink");
      $(".go_top").addClass("scrollTop");
    }else{
      $("header").addClass("shrink");
      $(".go_top").removeClass("scrollTop");
    }
  }

  function headershrink() {
    if ($('.menuBar').hasClass('toggle')) {
      $('header').addClass('shrink');
    } else {
      $('header').removeClass('shrink');
    }
  }
 
function navButton(){
  $('.menuBar').on('click', function(){
    $(this).toggleClass('toggle');
    $('.navMenu').toggleClass('active');

    headershrink();
  });
}
  
  function depth2toggle(){
    $('.navMenu').on('click', '> li > a', function(e){
      e.preventDefault();
  
      const $li = $(this).parent('li');
  
      if($li.hasClass('active')){
        $li.removeClass('active');
      } else {
        $('.navMenu > li').removeClass('active');
        $li.addClass('active');
      }
    });
  }

  function mainFnb(button){ 
    $(button).click(function(){ 
      $(button).not(this).removeClass("active").children("ul").css("height", "0px");
  
      let li = $(this).children('ul').children('li');
      let height = 0;
      li.each(function() {
        height += $(this).outerHeight(true);
      });
  
      console.log(height); 
      
      $(this).toggleClass("active"); 
      
      if($(this).hasClass('active')) { 
        $(this).children('ul').css('height', height + 'px'); 
      } else { 
        $(this).children('ul').css('height', '0px'); 
      } 
    }); 
  }
  

  function navMenuButton(){
    $('.navMenu').on('click', '> li > a', function(e){
      e.preventDefault();
      e.stopPropagation();
  
      const $li = $(this).parent('li');
  
      if ($li.hasClass('active')) {
        $li.removeClass('active');
      } else {
        $('.navMenu > li').removeClass('active');
        $li.addClass('active');
      }
    });
  

  };