$(document).ready(function(){
    sub02_02Toggle();
    accordionFaq($(".sub05_con03 .accordion_item"));
});


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
  
  