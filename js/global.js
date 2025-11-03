
$(window).on('scroll', function() {
  $('header').toggleClass('shrink', $('.menuBar').hasClass('toggle') || $(this).scrollTop() > 50);
  });

  $(document).ready(function(){
    sub02_02Toggle();
    // menuButton();
    accordionFaq($(".sub05_con03 .accordion_item"));
    navtoggle01();
    navButton();
  });


  function sub02_02Toggle(){
    $('.sub02_con02_detail>ul>li').click(function(){
      $('.sub02_con02_detail>ul>li').removeClass('active');
      $(this).addClass('active');
      $('.sub02_con02_detail>div').removeClass('active');
      $('.' + $(this).attr('data-tab')).addClass('active');
    });
  }

  function menuButton(){
    $('.menuBar').on('click', function(){
      $(this).toggleClass('toggle');
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
