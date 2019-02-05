$(document).ready(function(){

  //Begin Change header when scrolling
    //스크롤 할때 header모양 변함
    var scrolling_pc;
    scroll_check();//함수실행
    
     //스크롤 될마다 실행
    $(window).scroll(function(){
      scroll_check();//함수실행
    });//scroll
    
     //함수선언
    function scroll_check(){
      scrolling_pc = $(window).scrollTop();
      //console.log(scrolling_pc);
      if(scrolling_pc > 0){
        $("header").addClass("on");
        $(".gadgets_wrapper main section#filter").addClass("on");
        $(".gadgets_wrapper main .gnb_open").addClass("on");
        $(".gadgets_wrapper main .gnb_open_b").addClass("on");
      }else{
        $("header").removeClass("on");
        $(".gadgets_wrapper main section#filter").removeClass("on");
        $(".gadgets_wrapper main .gnb_open").removeClass("on");
        $(".gadgets_wrapper main .gnb_open_b").addClass("on");
      }
    }
  //End

  //Begin show more on index&gadgets page
  $('.card-nav button').on('click', function(){
    $(this).parent().toggleClass('is-active');
  });
  //End

  //Begin show mobile menu
    var document_hi = $(document).height();
    //console.log(document_hi);
    $("header .gnb_m").height(document_hi);
      //메인메뉴를 열면 서브메뉴오픈 버튼이 사라짐
    $("header .gnb_open2").on("click", function(){
      $(".gadgets_wrapper main .gnb_open").hide();
      $(".coupons main .gnb_open").hide();      
      $("header .gnb_kbg").fadeIn(300);
      $("header .gnb_m").animate({
        left : 0
      },300);
    });
     //메인메뉴를 열면 서브메뉴오픈 버튼이 나타남
    $("header .gnb_m>.gnb_close").on("click", function(){
      $(".gadgets_wrapper main .gnb_open").show();
      $(".coupons main .gnb_open").show();
      $("header .gnb_kbg").fadeOut(300);
      $("header .gnb_m").animate({
        left : -800
      },300);
    });
  //End

  //Play Youtube
   // video overlayer: start
    $(".js-overlay-start").unbind("click").bind("click", function(e) {
      e.preventDefault();
      var src = $(this).attr("data-url");
      $(".overlay-video").show();
      setTimeout(function() {
        $(".overlay-video").addClass("o1");
        $("#player").attr("src", src);
      }, 100);
    });
     // video overlayer: close it if you click outside of the modal
    $(".overlay-video").click(function(event) {
      if (!$(event.target).closest(".videoWrapperExt").length) {
        var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
        $("#player").attr("src", PlayingVideoSrc);
        $(".overlay-video").removeClass("o1");
        setTimeout(function() {
          $(".overlay-video").hide();
        }, 600);
      }
    });
     // video overlayer: close it via the X icon
    $(".video_close").click(function(event) {
        var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
        $("#player").attr("src", PlayingVideoSrc);
        $(".overlay-video").removeClass("o1");
        setTimeout(function() {
          $(".overlay-video").hide();
        }, 600);
    });
  //End

  //Begin show side menu on gadgets page
    var document_gadgets = $(document).height();
    //console.log(document_gadgets);
    $(".gadgets_wrapper main section#filter").height(document_gadgets);
    
    $(".gadgets_wrapper main .gnb_open").on("click", function(){
      $(".gadgets_wrapper main .gnb_kbg").fadeIn(300);
      $(".gadgets_wrapper main section#filter").animate({
        right : 0
      },300);
    });
    
    $(".gadgets_wrapper main .gnb_kbg").on("click", function(){
      $(".gadgets_wrapper main .gnb_kbg").fadeOut(300);
      $(".gadgets_wrapper main section#filter").animate({
        right : -800
      },300);
    });

    $(".gadgets_wrapper main .gnb_open_b").on("click", function(){
      $(".gadgets_wrapper main .gnb_kbg").fadeIn(300);
      $(".gadgets_wrapper main section#filter").animate({
        right : 0
      },300);
    });

    $(".gadgets_wrapper main .gnb_kbg_b").on("click", function(){
      $(".gadgets_wrapper main .gnb_kbg").fadeOut(300);
      $(".gadgets_wrapper main section#filter").animate({
        right : -800
      },300);
    });   
  //End

  //Begin Opne&Close Menu on Deals Page
  var menu_status;
  $(".deals_sub_nav .sub_nav_mobile>ul>li>a").on("click", function(){
    menu_status = $(this).parent().hasClass("on");
    //console.log(menu_status);
    if(menu_status == true){
      //지금 열려있는 상태 -- 닫는기능
      $(this).parent().removeClass("on");
      $(this).next().slideUp();
    }else{
      //지금 닫혀있는 상태 - 여는기능
      $(".deals_sub_nav .sub_nav_mobile>ul>li").removeClass("on");
      $(".deals_sub_nav .sub_nav_mobile>ul>li>ul").slideUp();
      $(this).parent().addClass("on");
      $(this).next().slideDown();
    }
  });
  //End

  //Begin Highlight All Links To Current Page for Main menu
  $(function(){
   $("header .gnb_pc>ul>li>a").each(function(){
     if ($(this).attr("href") == window.location.pathname){
          $(this).addClass("active");
     }
   });
  });
  //End 


});

