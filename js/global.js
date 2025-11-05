$(window).on('scroll', function() {
  $('header').toggleClass('shrink', $('.menuBar').hasClass('toggle') || $(this).scrollTop() > 50);
  });

  $(document).ready(function(){
    sub02_02Toggle();
    accordionFaq($(".sub05_con03 .accordion_item"));
    navtoggle01();
    navButton();
    depth2toggle();
    // mainFnb($("header>div>ul>li")); 
    // navMenuButton();
  });


  function sub02_02Toggle(){
    $('.sub02_con02_detail>ul>li').click(function(){
      $('.sub02_con02_detail>ul>li').removeClass('active');
      $(this).addClass('active');
      $('.sub02_con02_detail>div').removeClass('active');
      $('.' + $(this).attr('data-tab')).addClass('active');
    });
  }

  function accordionFaq(button){
    $(button).click(function(){
      $(this).toggleClass("active");
    });
  }
  
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
  
  $(function(){
    $('.navMenu').on('click', '> li > a', function(e){
      e.preventDefault();
      e.stopPropagation();
  
      const $li = $(this).parent('li');
  
      if ($li.hasClass('is-active')) {
        $li.removeClass('is-active');
      } else {
        $('.navMenu > li').removeClass('is-active');
        $li.addClass('is-active');
      }
    });
  
    $(document).on('click', function(e){
      if (!$(e.target).closest('header .navMenu').length) {
        $('.navMenu > li').removeClass('active');
      }
    });
  });