$(document).ready(function(){
  $(".js-play-video").click(function(){
    $(".js-video-player").html('<iframe width="790" height="480" src="http://www.youtube.com/embed/TsRw69N4ogM?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    $(".popup").toggleClass("close open");
  });
  $(".js-video-close").click(function(){
    $(".popup").toggleClass("close open");
    $(".js-video-player").html('');
  });

  function playButtonPosition() {
    var logoHeight            = 340;
    var footerHeight          = $(".js-footer").height();
    var windowHeight          = $(window).height();
    var playButtonPlaceHeight = windowHeight - logoHeight - footerHeight;

    $(".js-play-button").css({ height: playButtonPlaceHeight });
  }

  playButtonPosition();
  $(window).resize(function() {
      playButtonPosition();
  });
})
