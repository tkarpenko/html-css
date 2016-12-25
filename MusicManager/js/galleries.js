$(document).ready(function() {
  
  $('.js-image-gallery .show img').load(function() {
    var shift_top = ($(this).parent().height() - $(this).height())/2;
    $(this).css({"margin-top": shift_top});
  });
  
  $('.js-video-gallery .show iframe').load(function() {
    var shift_top = ($(this).parent().height() - $(this).height())/2;
    $(this).css({"margin-top": shift_top});
  });
  
  $('#js-add-scroll').height(function() { return $(this).parents('.mm_fullscreen').height() / 2; });
  $('#js-add-scroll').width(function() { return $(this).parents('.info_place').width(); });
  $('#js-add-scroll').custom_scroll();
  
  $(window).resize(function() {
    var shift_top = ($('.show_place img').parent().height() - $('.show_place img').height())/2;
    $('.show_place img').css({"margin-top": shift_top});
    
    shift_top = ($('.show_place iframe').parent().height() - $('.show_place iframe').height())/2;
    $('.show_place iframe').css({"margin-top": shift_top});
  })
  
})