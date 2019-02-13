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
        $(".sub_nav .gnb_open").addClass("on");
        $(".sub_nav .gnb_open_b").addClass("on");
      }else{
        $("header").removeClass("on");
        $(".gadgets_wrapper main section#filter").removeClass("on");
        $(".gadgets_wrapper main .gnb_open").removeClass("on");
        $(".gadgets_wrapper main .gnb_open_b").removeClass("on");
        $(".sub_nav .gnb_open").removeClass("on");
        $(".sub_nav .gnb_open_b").removeClass("on");
      }
    }
  //End

  //Begin show mobile menu
    var document_hi = $(document).height();
    //console.log(document_hi);
    $("header .gnb_m").height(document_hi);
      //메인메뉴를 열면 서브메뉴오픈 버튼이 사라짐
    $("header .gnb_open2").on("click", function(){
      $(".gadgets_wrapper main .gnb_open").hide();
      $(".sub_nav .gnb_open").hide();
      $(".featured .gnb_open").hide();      
      $("header .gnb_kbg").fadeIn(300);
      $("header .gnb_m").animate({
        left : 0
      },300);
    });
     //메인메뉴를 열면 서브메뉴오픈 버튼이 나타남
    $("header .gnb_m>.gnb_close").on("click", function(){
      $(".gadgets_wrapper main .gnb_open").show();
      $(".sub_nav .gnb_open").show();
      $(".featured .gnb_open").show();  
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

  
  //Begin highlight menu
    function fun_nav(fun_name){
      $(fun_name).each(function(){
       if ($(this).attr("href") == window.location.pathname){
            $(this).addClass("active");
       }
     });
    }
    //Begin Highlight All Links To Current Page for deals mobile
    $(function(){
       fun_nav(".sub_nav .gnb_m>ul>li>a");
    });
    //End 
    //Begin Highlight All Links To Current Page for deals pc
    $(function(){
       fun_nav(".sub_nav .sub_nav_pc>ul>li>a");
    });
    //End 
    //Begin Highlight All Links To Current Page for Main Menu
    $(function(){
       fun_nav("header .gnb_pc>ul>li>a");
    });
    //End 
  //End
  

 //Begin Loading page
  function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
  }
  
  // super simple router - go to page specified in hash, otherwise go to "default"
  function router(route) {
    var pageName = route ? route : $('.default.page').attr('data-page-name');
    var $page = $('[data-page-name="' + pageName + '"]');
    $('.page').css('display', 'none');
    $('[data-page]').removeClass('active');
    $('[data-page="' + pageName + '"]').addClass('active');
    $page.css('display', 'block');
  }
  router();
  
  // fake loader
  var progress = 0;
  var fakeLoaderInterval = window.setInterval(function () {
    var $lp = $('.loading-progress');
    progress = progress + getRandomArbitrary(10, 25);
    $lp.css('transform', 'translateX(' + progress + '%)');
  
    if (progress >= 75) {
      window.clearInterval(fakeLoaderInterval);
      $lp.css('transform', 'translateX(100%)');
      setTimeout(function () {return $('.loading').css('transform', 'translateY(calc(100% + 10px))');}, 400);
    }
  }, getRandomArbitrary(100, 500));
//End
  
  
  

});

