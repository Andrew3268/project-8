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

  //Begin Opne&Close Menu on promo_code
  var menu_status;
  $(".codes .lt_cnt .toggle>ul>li>a").on("click", function(){
    menu_status = $(this).parent().hasClass("on");
    //console.log(menu_status);
    if(menu_status == true){
      //지금 열려있는 상태 -- 닫는기능
      $(this).parent().removeClass("on");
      $(this).next().slideUp();
    }else{
      //지금 닫혀있는 상태 - 여는기능
      $(".codes .lt_cnt .toggle>ul>li").removeClass("on");
      $(".codes .lt_cnt .toggle>ul>li>ul").slideUp();
      $(this).parent().addClass("on");
      $(this).next().slideDown();
    }
  });
  //End


  //Begin show side menu on gadgets page
    var document_deals = $(document).height();
      //console.log(document_deals);
      $(".sub_nav .gnb_m").height(document_deals);
      
      $(".sub_nav .gnb_open").on("click", function(){
        $(".sub_nav .gnb_kbg").fadeIn(300);
        $(".sub_nav .gnb_m").animate({
          right : 0
        },300);
      });
      
      $(".sub_nav .gnb_close").on("click", function(){
        $(".sub_nav .gnb_kbg").fadeOut(300);
        $(".sub_nav .gnb_m").animate({
          right : -800
        },300);
      });

      $(".sub_nav .gnb_open_b").on("click", function(){
        $(".sub_nav .gnb_kbg").fadeIn(300);
        $(".sub_nav .gnb_m").animate({
          right : 0
        },300);
      });
      
      $(".sub_nav .gnb_close").on("click", function(){
        $(".sub_nav .gnb_kbg").fadeOut(300);
        $(".sub_nav .gnb_m").animate({
          right : -1000
        },300);
      });
  //End


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
  
  //Begin Highlight All Links To Current Page for deals mobile
  $(function(){
     fun_nav(".sub_nav .sub_nav_pc>ul>li>a");
  });
  //End 
  
  //Begin Highlight All Links To Current Page for deals mobile
  $(function(){
     fun_nav("header .gnb_pc>ul>li>a");
  });
  //End 
  
  
  //Begin filter on featured
  var example = new DataFilterJS({
    filterGroup: '.filter-group',
    filterNode: '.filter-node',
    filterButtonGroup: '.filter-search',
    transitionSpeed: '0.5s'
  });

  function DataFilterJS(config){
    // define variables
    var filterGroup = config.filterGroup;
    var filterNode = config.filterNode;
    var filterButtonGroup = config.filterButtonGroup;
    var transitionSpeed = config.transitionSpeed;
    var filter_group = $(filterGroup);
    var filter_node = $(filterGroup+' > '+filterNode);
    var search_val = $(filterButtonGroup+'> '+'input[type="text"]').value;
    $(filterGroup+', '+filterNode+', '+filterNode+'.filter-me').css({"transition":"all "+transitionSpeed});
    
    // (Button) Data Filter Function
    $(filterButtonGroup+' .filter-button').on('click', function(e) {
      var eventFilter = e.currentTarget.attributes[1].nodeValue;
       // Loop through Filter Nodes on Button Click
       $.each(filter_node, function(i, v) {
          if(eventFilter == "*") {
            filter_node[i].classList.remove('filter-me');
          } else if(filter_node[i].getAttribute('data-filter').includes(eventFilter) == false) {
            filter_node[i].classList.add('filter-me')
          } else {filter_node[i].classList.remove('filter-me');}
       });
    }); // end click event

    // (Keystroke) Data Filter Function    
    $(filterButtonGroup+' > input[type="text"]').on('keypress keydown keyup', function(e, fnd) {
      // Loop through Filter Nodes on Keystroke
      $.each($(filterNode), function(i, v) {
        var node = v.getAttribute("data-filter").toString().toUpperCase();
        var search_string = $(filterButtonGroup+' > '+'input[type="text"]').val().toUpperCase();
        //console.log(node.getAttribute('data-filter'));
        if(node.includes(search_string) == false) {
          v.classList.add('filter-me');
        } else {v.classList.remove('filter-me');}
      }); // end each
    }); // end keypress
  }
  //End filter on featured
  
  //Begin show menu on featured
  	var document_h = $(document).height();
	//console.log(document_h);
	$(".featured .sm_mobile").height(document_h);
	
	$(".featured .gnb_open").on("click", function(){
		$(".featured .gnb_kbg").fadeIn(300);
		$(".featured .sm_mobile").animate({
			right : 0
		},300);

	});
	$(".featured .gnb_kbg").on("click", function(){
		$(".featured .gnb_kbg").fadeOut(300);
		$(".featured .sm_mobile").animate({
			right : -800
		},300);
	});
	$(".featured .gnb_close").on("click", function(){
		$(".featured .gnb_kbg").fadeOut(300);
		$(".featured .sm_mobile").animate({
			right : -800
		},300);
	});
  //End show menu on featured
  
  
  
  

});

