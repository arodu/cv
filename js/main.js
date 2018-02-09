jQuery(function(){
  /*
  var lang_default = (navigator.language || navigator.userLanguage).substr(0, 2).toLowerCase();
  var translator = null;

  $.getJSON("translations.json", function(dict){
    translator = $('body').translate({lang: lang_default, t: dict});
  });
  $('.lang-es').on('click', function(){
    translator.lang("es");
  });
  $('.lang-en').on('click', function(){
    translator.lang("en");
  }); */

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
});
