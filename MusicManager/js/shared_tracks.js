$(document).ready(function() {
  $('.mm_create.js-new-track-link').click(function(e){
    $('.mm_create_form.js-new-track-link').toggleClass('open');
    e.preventDefault();
  })
  
  $('.mm_menu_buttons .js-track-shared-link-list').click(function(e){
    $(this).parents('.mm_track').children('.mm_shared_links.js-track-shared-link-list').toggleClass('open');
    e.preventDefault();
  })
  
  $('.mm_menu_buttons .js-track-shared-link-create').click(function(e){
    $(this).parents('.mm_track').children('.mm_create_form.js-track-shared-link-create').toggleClass('open');
    e.preventDefault();
  })
  
  $('.shared_link .title').click(function(e){
    $(this).parents('.shared_link').toggleClass('open');
    e.preventDefault();
  })
  
   
})