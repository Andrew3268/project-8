$(document).ready(function(){

 //Begin sticky side menu on gadgets page
  $(function () {
    followSidebar();
  });
  function followSidebar() {
    var $sidebar = $(".gadgets_wrapper main section#filter"),
    $window = $(window),
    offset = $sidebar.offset(),
    topPadding = 15,
    activeClass = 'on';

    $window.scroll(function () {
    if ($window.scrollTop() > offset.top) {
      $sidebar.addClass(activeClass);
    } else {
      $sidebar.removeClass(activeClass);
    }
    });
  }
  //End

});