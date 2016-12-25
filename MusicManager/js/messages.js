$(document).ready(function() {
  
  
  // 65px - height for title of popup and its "Close" link; 
  // 10px - height for small gap of player and popup content
  var show_height = $(window).height() - $('#player .player').height() - $('.th_header_v2').height() - $('.th_header_v2_menu').height() - 65 - 10; 
  
  $('.messages .users_list').height(show_height);
  $('.messages .messages_list').height(show_height - 230);
  
  $('.users_list').custom_scroll();
  $('.messages_list').custom_scroll();
  $('.new textarea').custom_scroll();
})