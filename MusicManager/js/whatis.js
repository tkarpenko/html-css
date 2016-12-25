$(document).ready(function(){
  $(".js-play-video").click(function(){
      $(".js-video-player").html('<iframe width="790" height="480" src="http://www.youtube.com/embed/HedtbJUlArw?autoplay=1" frameborder="0" allowfullscreen></iframe>');
     $(".popup").toggleClass("close open");
  });
  $(".js-video-close").click(function(){
     $(".popup").toggleClass("close open");
     $(".js-video-player").html('');
  });
})