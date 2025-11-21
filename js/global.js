$(window).on('scroll', function() {
  $('header').toggleClass('shrink', $('.menuBar').hasClass('toggle') || $(this).scrollTop() > 50);
});

$(document).on('click', function(e){
  if (!$(e.target).closest('header .navMenu').length) {
    $('.navMenu > li').removeClass('active');
  }
});

  $(document).ready(function(){
    headerScroll();
    sub02_02Toggle();
    accordionFaq($(".sub05_con03 .accordion_item"));
    navtoggle01();
    navButton();
    depth2toggle();
    mainFnb($("header>div>.navMenu>li"));
    navMenuButton();
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


  // 판매제품안내 서브페이지(2-2)
  function sub02_02Toggle(){
    $('.sub02_con02_detail>ul>li').click(function(){
      $('.sub02_con02_detail>ul>li').removeClass('active');
      $(this).addClass('active');
      $('.sub02_con02_detail>div').removeClass('active');
      $('.' + $(this).attr('data-tab')).addClass('active');
    });
  }


  // FaQ 서브페이지
  function accordionFaq(button){
    $(button).click(function(){
      $(this).toggleClass("active");
    });
  }
  

  // header nav
  function navtoggle01(){
    $('.menuBar').on('click', function(){
      $('header').toggleClass('shrink');
    });
  }
  
  function navButton(){
      $('.menuBar').on('click', function(){
        $(this).toggleClass('toggle');
        $('.navMenu').toggleClass('active');
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
      let li = $(this).find('li'); 
      let liHeight = li.outerHeight(true); 
      let margin = li.outerHeight(true) - li.outerHeight(); 
      let liLength = li.length; 
      let height = liHeight * liLength - margin; 
      console.log(height) 
      
      $(this).toggleClass("active"); 
      
      if($(this).hasClass('active')){ 
        $(this).children('ul').css('height', height + 'px'); 
      }else { 
        $(this).children('ul').css('height', 0 + 'px'); 
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