$(document).ready(function() {
  $('.mm_track .track_cover').click(function(e){
    $(this).parent().toggleClass('play');
    e.preventDefault();
  })
  
  $('.mm_album .album_cover').click(function(e){
    $(this).parents('.mm_album').toggleClass('play');
    e.preventDefault();
  })
  
  $('.mm_artist .artist_cover').click(function(e){
    $(this).parents('.mm_artist').toggleClass('play');
    e.preventDefault();
  })
  
  $('.mm_show').click(function(e){
    $(this).parents('dl').toggleClass('open close');
    e.preventDefault();
  })
  
  
  $('.mm_menu_buttons a').click(function(e) {
    $(this).parents('.js-track').find('.mm_menu').not('.mm_menu.'+$(this).attr('class')).removeClass('open').addClass('close');
    $(this).parents('.js-track').find('.mm_menu.'+$(this).attr('class')).toggleClass('close open');
    e.preventDefault();
  });
  
  
  $('.mm_menu .menu_links a').click(function(e) {
    $(this).parent().siblings().removeClass('active');
    $(this).parent().toggleClass('active');
    
    $(this).parents('.mm_menu').children('.menu_content.' + $(this).attr('class')).siblings().removeClass('active');
    $(this).parents('.mm_menu').children('.menu_content.' + $(this).attr('class')).toggleClass('active');
    alert($(this).attr('href'));
  });
  
  $('.mm_tabs li a').click(function(e) {
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    
    $($(this).attr('href')).siblings().removeClass('open');
    $($(this).attr('href')).addClass('open');
  })
  
  $('.mm_btn_play').click(function() {
    $(this).toggleClass('pause');
  })
  
  $('.mm_edit_tags .input input').keypress(function(e) {
    if (e.which == 13) {
      $(this).parent().before('<li class="label">'+$(this).val()+'<a href="#" title="delete"><i class="icon_close shadow"></i></a></li>');
      $(this).val('');
      return false;
    }
  })
  
  $('.mm_edit_tags .label a').click(function(e) {
    $(this).parent().remove();
  })
  
  $("#datepicker").datepicker();
  
  $('.mm_create.js-video-import').click(function(e){
    $(this).parents('.mm_block_head').next().children('.mm_create_form.js-video-import').toggleClass('open');
    e.preventDefault();
  })
  
  $('.mm_create.js-video-import-from-channel').click(function(e){
    $(this).parents('.mm_block_head').next().children('.mm_create_form.js-video-import-from-channel').toggleClass('open');
    e.preventDefault();
  })
  
  $('.mm_create.js-chart-genre').click(function(e){
    $(this).parents('.mm_block_head').next().children('.mm_create_form.js-chart-genre').toggleClass('open');
    e.preventDefault();
  })
  
  $('#js-edit-profile-bio').custom_scroll();
  $('#js-edit-track-description').custom_scroll();
  $('#js-edit-track-lyrics').custom_scroll();
  $('#js-import-video-description').custom_scroll();
  $('#js-link-with-track').custom_scroll();
  $('#js-import-video-from-channel-list').custom_scroll();
  
})