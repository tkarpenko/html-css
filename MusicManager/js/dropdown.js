$(document).ready(function() {
  $('.mm_dropdown > dt').click(function(e) {
    $(this).parent().toggleClass('open close');
    e.preventDefault();
  })
  
  $('.mm_dropdown .dropdown_items > li > a').click(function(e) {
  
    var dropdown_item = $(this).html();
    $(this).parents('.mm_dropdown').children().find('.dropdown_head_txt').html(dropdown_item);
        
    $(this).parent().siblings().removeClass('open');
    $(this).parent().siblings().children().find('li').removeClass('active');
    $(this).parent().addClass('open');
      
    if ($(this).parent().hasClass('dir')) {
      var ul_id = $(this).parent().children().find('ul').attr('id');
      var ul_height = $(this).parent().parent().height();
      
      $('ul#'+ul_id+':not(".custom_scroll_place")').height(ul_height);
      $('ul#'+ul_id+':not(".custom_scroll_place")').custom_scroll();
    }
    
    e.preventDefault();
  })
  
  $('.mm_dropdown .dropdown_items .mm_checkbox').click(function(e) {
    var dropdown_item = $(this).html();
    var text_in_head = $(this).parents('.mm_dropdown').children().find('.dropdown_head_txt').html();
    $(this).parents('.mm_dropdown').children().find('.dropdown_head_txt').html(text_in_head+', '+dropdown_item);
    $(this).parents('.mm_dropdown').children().find('.dropdown_head_txt').attr('title', text_in_head+', '+dropdown_item);
          
    e.preventDefault();
  })

  
  $('.genre .mm_dropdown .dropdown_subitems li > a').click(function(e) {
    var dropdown_item = $(this).parents('.dir').find('>:first-child').html();
    var dropdown_subitem = $(this).html();
    
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    
    $(this).parents('.mm_dropdown').children().find('.dropdown_head_txt').html(dropdown_item + ' - ' + dropdown_subitem);
    $(this).parents('.mm_dropdown').children().find('.dropdown_head_txt').attr('title', dropdown_item + ' - ' + dropdown_subitem);
    
    e.preventDefault();
  })
  
})