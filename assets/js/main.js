jQuery(function(){
  
  $('.abbr').tooltip();
  
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
  
  
  
  /*======= Skillset *=======*/
  //$('.level-bar-inner').css('width', '0');
  //$(window).on('load', function() {
  //    $('.level-bar-inner').each(function() {
  //        var itemWidth = $(this).data('level');
  //        $(this).animate({
  //            width: itemWidth
  //        }, 800);
  //        
  //    });
  //});
  
  
});