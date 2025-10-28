
$(window).on('scroll', function() {
    $('header').toggleClass('shrink', $(this).scrollTop() > 50);
  });

  $(document).ready(function(){
    sub02_02Toggle();
  });


  function sub02_02Toggle(){
    $('.sub02_con02_detail ul li').click(function(){
      $('.sub02_con02_detail ul li').removeClass('active');
      $(this).addClass('active');
      $('.sub02_con02_detail div').removeClass('active');
      $('.' + $(this).attr('data-tab')).addClass('active');
    });
  }